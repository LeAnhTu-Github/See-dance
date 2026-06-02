import { defineConfig, type Plugin } from 'vite'
import path from 'node:path'
import react from '@vitejs/plugin-react'
import pkg from './package.json' with { type: 'json' }

// /__api_proxy middleware để dev mode có thể bypass CORS giống Electron.
function apiCorsProxyPlugin(): Plugin {
  return {
    name: 'api-cors-proxy',
    configureServer(server) {
      server.middlewares.use('/__api_proxy', async (req, res) => {
        if (req.method === 'OPTIONS') {
          res.writeHead(204, {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': '*',
          })
          res.end()
          return
        }
        const urlParam = new URL(req.url || '', 'http://localhost').searchParams.get('url')
        if (!urlParam) {
          res.writeHead(400, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify({ error: 'Missing ?url= parameter' }))
          return
        }
        try {
          const chunks: Buffer[] = []
          for await (const c of req) chunks.push(typeof c === 'string' ? Buffer.from(c) : c)
          const body = chunks.length ? Buffer.concat(chunks) : undefined
          const raw = req.headers['x-proxy-headers']
          let forward: Record<string, string> = {}
          if (typeof raw === 'string') { try { forward = JSON.parse(raw) } catch {} }
          const r = await fetch(urlParam, {
            method: req.method || 'GET',
            headers: forward,
            body: req.method !== 'GET' && req.method !== 'HEAD' ? body : undefined,
          })
          const buf = await r.arrayBuffer()
          const headers: Record<string, string> = { 'Access-Control-Allow-Origin': '*' }
          const ct = r.headers.get('content-type')
          if (ct) headers['Content-Type'] = ct
          res.writeHead(r.status, headers)
          res.end(Buffer.from(buf))
        } catch (e: any) {
          res.writeHead(502, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
          res.end(JSON.stringify({ error: 'Proxy failed', detail: e?.message }))
        }
      })
    },
  }
}

export default defineConfig({
  define: {
    'import.meta.env.VITE_APP_VERSION': JSON.stringify(pkg.version),
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@opencut/ai-core/services/prompt-compiler': path.resolve(__dirname, './src/packages/ai-core/services/prompt-compiler.ts'),
      '@opencut/ai-core/api/task-poller': path.resolve(__dirname, './src/packages/ai-core/api/task-poller.ts'),
      '@opencut/ai-core/protocol': path.resolve(__dirname, './src/packages/ai-core/protocol/index.ts'),
      '@opencut/ai-core': path.resolve(__dirname, './src/packages/ai-core/index.ts'),
    },
  },
  plugins: [apiCorsProxyPlugin(), react()],
  build: {
    outDir: 'dist-web',
    emptyOutDir: true,
  },
})
