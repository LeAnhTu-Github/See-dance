// Browser shim cho các API gốc Electron khi app chạy ở web thuần.
// Không chạy trong môi trường Electron (đã có window.fileStorage thật).

const isElectron = typeof window !== 'undefined' && !!(window as any).fileStorage

if (!isElectron && typeof window !== 'undefined') {
  installWebShim()
}

function installWebShim() {
  const DB_NAME = 'moyin-web'
  const DB_VERSION = 1
  const STORE_FILES = 'files'
  const STORE_IMAGES = 'images'
  const LOCAL_PREFIX = 'local-image://'

  let dbPromise: Promise<IDBDatabase> | null = null
  function getDB(): Promise<IDBDatabase> {
    if (!dbPromise) {
      dbPromise = new Promise((resolve, reject) => {
        const req = indexedDB.open(DB_NAME, DB_VERSION)
        req.onupgradeneeded = () => {
          const db = req.result
          if (!db.objectStoreNames.contains(STORE_FILES)) db.createObjectStore(STORE_FILES)
          if (!db.objectStoreNames.contains(STORE_IMAGES)) db.createObjectStore(STORE_IMAGES)
        }
        req.onsuccess = () => resolve(req.result)
        req.onerror = () => reject(req.error)
      })
    }
    return dbPromise
  }

  function tx<T>(store: string, mode: IDBTransactionMode, fn: (s: IDBObjectStore) => IDBRequest<T>): Promise<T> {
    return getDB().then(db => new Promise<T>((resolve, reject) => {
      const t = db.transaction(store, mode)
      const s = t.objectStore(store)
      const req = fn(s)
      req.onsuccess = () => resolve(req.result)
      req.onerror = () => reject(req.error)
    }))
  }

  function listKeys(store: string, prefix: string): Promise<string[]> {
    return getDB().then(db => new Promise<string[]>((resolve, reject) => {
      const t = db.transaction(store, 'readonly')
      const s = t.objectStore(store)
      const req = s.openKeyCursor()
      const out: string[] = []
      req.onsuccess = () => {
        const cur = req.result
        if (!cur) return resolve(out)
        const k = String(cur.key)
        if (!prefix || k.startsWith(prefix)) out.push(k)
        cur.continue()
      }
      req.onerror = () => reject(req.error)
    }))
  }

  // ---------- ipcRenderer (no-op) ----------
  ;(window as any).ipcRenderer = {
    on() {}, off() {}, send() {},
    invoke: async () => null,
  }

  // ---------- fileStorage ----------
  ;(window as any).fileStorage = {
    async getItem(key: string) {
      const v = await tx<string | undefined>(STORE_FILES, 'readonly', s => s.get(key))
      return v ?? null
    },
    async setItem(key: string, value: string) {
      try { await tx(STORE_FILES, 'readwrite', s => s.put(value, key)); return true }
      catch (e) { console.error('[web-shim] fileStorage.setItem', e); return false }
    },
    async removeItem(key: string) {
      try { await tx(STORE_FILES, 'readwrite', s => s.delete(key)); return true }
      catch { return false }
    },
    async exists(key: string) {
      const v = await tx<string | undefined>(STORE_FILES, 'readonly', s => s.get(key))
      return v !== undefined
    },
    async listKeys(prefix: string) {
      return listKeys(STORE_FILES, prefix || '')
    },
    async listDirs(prefix: string) {
      const all = await listKeys(STORE_FILES, prefix || '')
      const p = prefix || ''
      const dirs = new Set<string>()
      for (const k of all) {
        const rest = k.slice(p.length).replace(/^\/+/, '')
        const seg = rest.split('/')[0]
        if (seg) dirs.add(seg)
      }
      return Array.from(dirs)
    },
    async removeDir(prefix: string) {
      try {
        const keys = await listKeys(STORE_FILES, prefix || '')
        await Promise.all(keys.map(k => tx(STORE_FILES, 'readwrite', s => s.delete(k))))
        return true
      } catch { return false }
    },
  }

  // ---------- imageStorage ----------
  const blobUrlCache = new Map<string, string>()

  async function getBlob(localPath: string): Promise<Blob | null> {
    const key = localPath.replace(LOCAL_PREFIX, '')
    const v = await tx<Blob | undefined>(STORE_IMAGES, 'readonly', s => s.get(key))
    return v ?? null
  }

  ;(window as any).imageStorage = {
    async saveImage(url: string, category: string, filename: string) {
      try {
        const safeCategory = (category || 'misc').replace(/[^a-zA-Z0-9_-]/g, '_')
        const safeName = filename || `${Date.now()}.png`
        const key = `${safeCategory}/${safeName}`
        let blob: Blob
        if (url.startsWith('data:')) {
          const res = await fetch(url)
          blob = await res.blob()
        } else {
          const res = await fetch(url, { mode: 'cors' })
          if (!res.ok) throw new Error(`fetch ${res.status}`)
          blob = await res.blob()
        }
        await tx(STORE_IMAGES, 'readwrite', s => s.put(blob, key))
        return { success: true, localPath: `${LOCAL_PREFIX}${key}` }
      } catch (e: any) {
        return { success: false, error: e?.message || 'saveImage failed' }
      }
    },
    async getImagePath(localPath: string) {
      if (!localPath?.startsWith(LOCAL_PREFIX)) return localPath || null
      if (blobUrlCache.has(localPath)) return blobUrlCache.get(localPath)!
      const blob = await getBlob(localPath)
      if (!blob) return null
      const url = URL.createObjectURL(blob)
      blobUrlCache.set(localPath, url)
      return url
    },
    async deleteImage(localPath: string) {
      try {
        const key = localPath.replace(LOCAL_PREFIX, '')
        await tx(STORE_IMAGES, 'readwrite', s => s.delete(key))
        const cached = blobUrlCache.get(localPath)
        if (cached) { URL.revokeObjectURL(cached); blobUrlCache.delete(localPath) }
        return true
      } catch { return false }
    },
    async readAsBase64(localPath: string) {
      const blob = await getBlob(localPath)
      if (!blob) return null
      return new Promise<string>((resolve, reject) => {
        const r = new FileReader()
        r.onload = () => resolve(String(r.result).split(',')[1] || '')
        r.onerror = () => reject(r.error)
        r.readAsDataURL(blob)
      })
    },
    async getAbsolutePath() {
      // Web không có path tuyệt đối.
      return null
    },
  }

  // ---------- storageManager (chủ yếu stub) ----------
  ;(window as any).storageManager = {
    async getPaths() {
      return { basePath: '(browser storage)', projectPath: '(IndexedDB)', mediaPath: '(IndexedDB)', cachePath: '(IndexedDB)' }
    },
    async selectDirectory() { return null },
    async validateDataDir() { return { valid: false, error: 'Không hỗ trợ trên web' } },
    async moveData() { return { success: false, error: 'Không hỗ trợ trên web' } },
    async linkData() { return { success: false, error: 'Không hỗ trợ trên web' } },
    async exportData() { return { success: false, error: 'Dùng nút export thủ công' } },
    async importData() { return { success: false, error: 'Dùng nút import thủ công' } },
    async getCacheSize() {
      try {
        const est = await navigator.storage?.estimate?.()
        return { total: est?.usage || 0, details: [{ path: 'IndexedDB', size: est?.usage || 0 }] }
      } catch { return { total: 0, details: [] } }
    },
    async clearCache() { return { success: true, clearedBytes: 0 } },
    async updateConfig() { return true },
  }

  // ---------- electronAPI ----------
  ;(window as any).electronAPI = {
    async saveFileDialog({ localPath, defaultPath }: { localPath: string; defaultPath: string; filters: any }) {
      try {
        const blob = await getBlob(localPath)
        if (!blob) return { success: false, error: 'Không tìm thấy file' }
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = defaultPath?.split(/[\\/]/).pop() || 'download'
        document.body.appendChild(a)
        a.click()
        a.remove()
        setTimeout(() => URL.revokeObjectURL(url), 1000)
        return { success: true, filePath: a.download }
      } catch (e: any) {
        return { success: false, error: e?.message || 'save failed' }
      }
    },
  }

  // ---------- appUpdater ----------
  const APP_VERSION = (import.meta as any).env?.VITE_APP_VERSION || '0.2.3-web'
  ;(window as any).appUpdater = {
    async getCurrentVersion() { return APP_VERSION },
    async checkForUpdates() {
      return { hasUpdate: false, currentVersion: APP_VERSION } as any
    },
    async openExternalLink(url: string) {
      window.open(url, '_blank', 'noopener,noreferrer')
      return { success: true } as any
    },
  }

  // ---------- imageHostUploader ----------
  function getByPath(obj: any, path: string): any {
    if (!obj || !path) return undefined
    return path.split('.').reduce((acc, k) => (acc == null ? undefined : acc[k]), obj)
  }
  function extractFirstHttpUrl(text: string): string | undefined {
    const m = text.match(/https?:\/\/\S+/)
    return m?.[0]?.replace(/[)\]\s"'<>]+$/, '')
  }
  async function dataUrlToBlob(dataUrl: string): Promise<Blob> {
    const res = await fetch(dataUrl)
    return res.blob()
  }

  ;(window as any).imageHostUploader = {
    async upload({ provider, apiKey, imageData, options }: any) {
      try {
        const baseUrl = provider.baseUrl?.replace(/\/+$/, '') || ''
        const uploadPath = provider.uploadPath || ''
        let uploadUrl = uploadPath.startsWith('http') ? uploadPath : `${baseUrl}${uploadPath.startsWith('/') ? '' : '/'}${uploadPath}`
        if (!uploadUrl) return { success: false, error: '图床上传地址未配置' }

        const fieldName = provider.imageField || 'image'
        const nameField = provider.nameField || 'name'
        const payloadType = provider.imagePayloadType || 'base64'
        const formData = new FormData()
        Object.entries(provider.staticFormFields || {}).forEach(([k, v]) => formData.append(k, v as string))
        if (provider.apiKeyFormField && apiKey) formData.append(provider.apiKeyFormField, apiKey)

        if (payloadType === 'file') {
          let blob: Blob
          if (imageData?.startsWith?.(LOCAL_PREFIX)) {
            const b = await getBlob(imageData)
            if (!b) return { success: false, error: 'Không đọc được ảnh local' }
            blob = b
          } else if (imageData?.startsWith?.('data:')) {
            blob = await dataUrlToBlob(imageData)
          } else {
            const r = await fetch(imageData)
            blob = await r.blob()
          }
          formData.append(fieldName, blob, options?.name || 'upload.png')
        } else {
          let base64 = ''
          if (imageData?.startsWith?.(LOCAL_PREFIX)) {
            const b = await getBlob(imageData)
            if (!b) return { success: false, error: 'Không đọc được ảnh local' }
            base64 = await new Promise<string>((resolve, reject) => {
              const r = new FileReader()
              r.onload = () => resolve(String(r.result).split(',')[1] || '')
              r.onerror = () => reject(r.error)
              r.readAsDataURL(b)
            })
          } else if (imageData?.startsWith?.('data:')) {
            base64 = imageData.split(',')[1] || ''
          } else {
            base64 = imageData
          }
          formData.append(fieldName, base64)
        }
        if (options?.name) formData.append(nameField, options.name)

        const u = new URL(uploadUrl)
        if (provider.apiKeyParam && apiKey) u.searchParams.set(provider.apiKeyParam, apiKey)
        if (provider.expirationParam && options?.expiration) u.searchParams.set(provider.expirationParam, String(options.expiration))

        const headers: Record<string, string> = { Accept: 'application/json, text/plain;q=0.9, */*;q=0.8' }
        if (provider.apiKeyHeader && apiKey) headers[provider.apiKeyHeader] = apiKey

        const ctrl = new AbortController()
        const timer = setTimeout(() => ctrl.abort(), 45000)
        try {
          const res = await fetch(u.toString(), { method: 'POST', headers, body: formData, signal: ctrl.signal })
          const text = await res.text()
          let data: any = null
          try { data = text ? JSON.parse(text) : null } catch {}
          if (!res.ok) {
            const msg = getByPath(data, 'error.message') || getByPath(data, 'message') || text || `上传失败: ${res.status}`
            return { success: false, error: typeof msg === 'string' ? msg : String(msg) }
          }
          const urlField = getByPath(data, provider.responseUrlField || 'url')
          const delField = getByPath(data, provider.responseDeleteUrlField || 'delete_url')
          if (urlField) {
            return { success: true, url: String(urlField), deleteUrl: delField ? String(delField) : undefined }
          }
          const fromText = extractFirstHttpUrl(text.trim())
          if (fromText) return { success: true, url: fromText }
          return { success: false, error: `图床 ${provider.name} 上传成功但未返回 URL` }
        } finally {
          clearTimeout(timer)
        }
      } catch (e: any) {
        if (e?.name === 'AbortError') return { success: false, error: '上传超时' }
        return { success: false, error: e?.message || '上传失败' }
      }
    },
  }

  // Đánh dấu môi trường web để các module khác biết
  ;(window as any).__IS_WEB__ = true

  // Yêu cầu storage bền vững
  if (navigator.storage?.persist) {
    navigator.storage.persist().catch(() => {})
  }

  console.info('[web-shim] Đã cài shim browser cho window.fileStorage / imageStorage / storageManager / electronAPI / appUpdater / imageHostUploader')
}

export {}
