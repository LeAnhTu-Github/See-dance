/**
 * 模型友好名映射表
 * API ID → 用户可读的显示名
 *
 * 数据来源: https://memefast.top/api/pricing_new (2026-02-19)
 * 不在此表中的模型直接显示原始 ID
 */

export const MODEL_DISPLAY_NAMES: Record<string, string> = {
  // ==================== 图像模型 ====================

  // --- Google / Gemini ---
  'gemini-3.1-pro-image-preview': 'Nano Banana 2 (Gemini 3.1 Pro)',
  'gemini-3-pro-image-preview': 'Nano Banana Pro (Gemini 3 Pro)',
  'gemini-2.5-flash-image': 'Nano Banana (Gemini 2.5 Flash)',
  'gemini-2.5-flash-image-preview': 'Nano Banana Preview (Gemini 2.5 Flash)',
  'aigc-image-gem': 'AIGC Gemini Vẽ ảnh',
  'aigc-image-qwen': 'AIGC Qwen Vẽ ảnh',

  // --- OpenAI / GPT ---
  'gpt-image-1.5': 'GPT Image 1.5',
  'gpt-image-1.5-all': 'GPT Image 1.5 (đảo ngược)',
  'gpt-image-1': 'GPT Image 1',
  'gpt-image-1-all': 'GPT Image 1 (đảo ngược)',
  'gpt-image-1-mini': 'GPT Image 1 Mini',
  'gpt-4o-image-vip': 'GPT-4o Image VIP',
  'sora_image': 'Sora Tạo ảnh',

  // --- Qwen / 通义千问 ---
  'qwen-image-edit-2509': 'Qwen Chỉnh sửa ảnh',
  'qwen-image-max': 'Tongyi Wanxiang Max',
  'qwen-image-max-2025-12-30': 'Tongyi Wanxiang Max (2025-12-30)',
  'qwen-image-plus': 'Tongyi Wanxiang Plus',
  'z-image-turbo': 'Z-Image Turbo',

  // --- Flux ---
  'flux-dev': 'Flux Dev',
  'flux.1-dev': 'Flux.1 Dev',
  'flux-schnell': 'Flux Schnell',
  'flux-pro': 'Flux Pro',
  'flux-1.1-pro': 'Flux 1.1 Pro',
  'flux-pro-1.1-ultra': 'Flux 1.1 Pro Ultra',
  'flux-kontext-pro': 'Flux Kontext Pro',
  'flux.1-kontext-pro': 'Flux.1 Kontext Pro',
  'flux-kontext-max': 'Flux Kontext Max',
  'flux.1-kontext-dev': 'Flux.1 Kontext Dev',
  'flux-kontext-dev': 'Flux Kontext Dev',
  'flux-kontext-dev-lora': 'Flux Kontext Dev LoRA',
  'flux-dev-lora': 'Flux Dev LoRA',
  'flux-redux': 'Flux Redux (chuyển phong cách)',
  'flux-2-dev': 'Flux 2 Dev',
  'flux-2-pro': 'Flux 2 Pro',

  // --- Fal-ai ---
  'fal-ai/flux-1/dev': 'Flux.1 Dev (fal)',
  'fal-ai/flux-lora': 'Flux LoRA (fal)',
  'fal-ai/flux-pro/kontext': 'Flux Kontext Pro (fal)',
  'fal-ai/flux-pro/kontext/text-to-image': 'Flux Kontext Pro T2I (fal)',
  'fal-ai/flux-pro/kontext/max': 'Flux Kontext Max (fal)',
  'fal-ai/flux-pro/kontext/max/text-to-image': 'Flux Kontext Max T2I (fal)',
  'fal-ai/flux-pro/v1.1-ultra': 'Flux 1.1 Pro Ultra (fal)',
  'fal-ai/flux-pro/v1.1-ultra-finetuned': 'Flux 1.1 Pro Ultra tinh chỉnh (fal)',
  'fal-ai/flux-pro/new': 'Flux Pro New (fal)',
  'fal-ai/flux-realism': 'Flux Realism (fal)',
  'fal-ai/recraft-v3': 'Recraft V3 (fal)',
  'fal-ai/ideogram/v3': 'Ideogram V3 (fal)',
  'fal-ai/ideogram/v2': 'Ideogram V2 (fal)',
  'fal-ai/ideogram/v2/turbo': 'Ideogram V2 Turbo (fal)',
  'fal-ai/stable-diffusion-v35-large': 'SD 3.5 Large (fal)',
  'fal-ai/stable-diffusion-v35-large-turbo': 'SD 3.5 Large Turbo (fal)',
  'fal-ai/stable-diffusion-v35-medium': 'SD 3.5 Medium (fal)',
  'fal-ai/hidream-i1-full': 'HiDream I1 Full (fal)',
  'fal-ai/hidream-i1-dev': 'HiDream I1 Dev (fal)',
  'fal-ai/hidream-i1-fast': 'HiDream I1 Fast (fal)',
  'fal-ai/nano-banana': 'Nano Banana (fal)',

  // --- Midjourney ---
  'midjourney': 'Midjourney Vẽ ảnh',
  'niji-6': 'Niji 6 Vẽ ảnh',
  'mj-chat': 'Midjourney Chat',
  'mj-video': 'Midjourney Video',
  'mj-video-extend': 'Midjourney Kéo dài video',
  'mj-video-upscale': 'Midjourney Phóng to video',
  'mj-editor': 'Midjourney Chỉnh sửa',
  'mj-inpaint': 'Midjourney Vẽ lại vùng',
  'mj-outpaint': 'Midjourney Mở rộng ảnh',
  'mj-pan': 'Midjourney Mở rộng theo hướng',
  'mj-upscale': 'Midjourney Phóng to',
  'mj-variation': 'Midjourney Biến thể',
  'mj-zoom': 'Midjourney Thu phóng',
  'mj_imagine': 'Midjourney Vẽ ảnh',
  'mj_blend': 'Midjourney Chế độ trộn',
  'mj_describe': 'Midjourney Mô tả ảnh',
  'mj_shorten': 'Midjourney Rút gọn câu lệnh',
  'mj_uploads': 'Midjourney Tải ảnh lên',
  'mj_action': 'Midjourney Tác vụ',
  'mj_modal': 'Midjourney Gửi qua cửa sổ',
  'mj_fetch': 'Midjourney Truy vấn tác vụ',
  'mj_notify': 'Midjourney Thông báo callback',

  // --- Ideogram ---
  'ideogram_generate_V_1': 'Ideogram V1',
  'ideogram_generate_V_1_TURBO': 'Ideogram V1 Turbo',
  'ideogram_generate_V_2': 'Ideogram V2',
  'ideogram_generate_V_3_TURBO': 'Ideogram V3 Turbo',
  'ideogram_edit_V_3_DEFAULT': 'Ideogram V3 Chỉnh sửa',
  'ideogram_edit_V_3_QUALITY': 'Ideogram V3 Chỉnh sửa Quality',
  'ideogram_edit_V_3_TURBO': 'Ideogram V3 Chỉnh sửa Turbo',
  'ideogram_remix_V_1': 'Ideogram V1 Remix',
  'ideogram_remix_V_1_TURBO': 'Ideogram V1 Remix Turbo',
  'ideogram_remix_V_2': 'Ideogram V2 Remix',
  'ideogram_remix_V_2_TURBO': 'Ideogram V2 Remix Turbo',
  'ideogram_remix_V_3_DEFAULT': 'Ideogram V3 Remix',
  'ideogram_remix_V_3_QUALITY': 'Ideogram V3 Remix Quality',
  'ideogram_remix_V_3_TURBO': 'Ideogram V3 Remix Turbo',
  'ideogram_reframe_V_3_DEFAULT': 'Ideogram V3 Reframe',
  'ideogram_reframe_V_3_QUALITY': 'Ideogram V3 Reframe Quality',
  'ideogram_reframe_V_3_TURBO': 'Ideogram V3 Reframe Turbo',
  'ideogram_replace_background_V_3_DEFAULT': 'Ideogram V3 Thay nền',
  'ideogram_replace_background_V_3_QUALITY': 'Ideogram V3 Thay nền Quality',
  'ideogram_replace_background_V_3_TURBO': 'Ideogram V3 Thay nền Turbo',
  'ideogram_describe': 'Ideogram Ảnh sang văn bản',
  'ideogram_upscale': 'Ideogram Phóng to',
  'ideogram_generate_V_3_DEFAULT': 'Ideogram V3',
  'ideogram_generate_V_3_QUALITY': 'Ideogram V3 Quality',
  'ideogram_generate_V_3_SPEED': 'Ideogram V3 Speed',
  'ideogram_generate_V_2_DEFAULT': 'Ideogram V2',
  'ideogram_generate_V_2_QUALITY': 'Ideogram V2 Quality',
  'ideogram_generate_V_2_SPEED': 'Ideogram V2 Speed',
  'ideogram_generate_V_2_TURBO': 'Ideogram V2 Turbo',

  // --- Doubao / 豆包 / Seedream ---
  'doubao-seedream-4-0-250828': 'Seedream 4.0',
  'doubao-seedream-4-5-251128': 'Seedream 4.5',
  'doubao-seedream-3-0-t2i-250415': 'Seedream 3.0',
  'doubao-seededit-3-0-i2i-250628': 'SeedEdit 3.0 (ảnh sang ảnh)',

  // --- Kling / 可灵 ---
  'kling-image': 'Kling Tạo ảnh',
  'kling-omni-image': 'Kling Omni Ảnh',
  'kling-image-recognize': 'Kling Nhận diện ảnh',
  // Kling 图片模型版本 (MemeFast model_version)
  'kling-image-v1': 'Kling Ảnh V1',
  'kling-image-v1-5': 'Kling Ảnh V1.5',
  'kling-image-v2': 'Kling Ảnh V2',
  'kling-image-v2-new': 'Kling Ảnh V2 New',
  'kling-image-v2-1': 'Kling Ảnh V2.1',

  // --- Grok / xAI ---
  'grok-3-image': 'Grok 3 Image',
  'grok-4-image': 'Grok 4 Image',

  // --- Recraft ---
  'recraft-v3': 'Recraft V3',

  // --- Stability / SD ---
  'stable-diffusion-3-5-large': 'SD 3.5 Large',
  'stable-diffusion-3-5-large-turbo': 'SD 3.5 Large Turbo',
  'stable-diffusion-3-5-medium': 'SD 3.5 Medium',

  // --- HiDream ---
  'hidream-i1-full': 'HiDream I1 Full',
  'hidream-i1-dev': 'HiDream I1 Dev',
  'hidream-i1-fast': 'HiDream I1 Fast',

  // --- Leonardo ---
  'leonardo-image': 'Leonardo Tạo ảnh',

  // --- DeepSeek ---
  'deepseek-ocr': 'DeepSeek OCR',

  // --- Recraftv3 (dall-e-3 格式) ---
  'recraftv3': 'Recraft V3 (dall-e-3)',

  // --- Kolors ---
  'kolors': 'Kolors Ketu',

  // --- SiliconFlow ---
  'SiliconFlow-flux-1-schnell': 'Flux Schnell (SiliconFlow)',
  'SiliconFlow-flux-1-dev': 'Flux Dev (SiliconFlow)',
  'SiliconFlow-sd-3-5-large': 'SD 3.5 Large (SiliconFlow)',
  'SiliconFlow-sd-3-5-large-turbo': 'SD 3.5 Large Turbo (SiliconFlow)',
  'SiliconFlow-kolors': 'Kolors Ketu (SiliconFlow)',

  // --- Replicate ---
  'replicate-flux-1.1-pro': 'Flux 1.1 Pro (Replicate)',
  'replicate-flux-1.1-pro-ultra': 'Flux 1.1 Pro Ultra (Replicate)',
  'replicate-flux-dev': 'Flux Dev (Replicate)',
  'replicate-flux-schnell': 'Flux Schnell (Replicate)',

  // ==================== 音视频模型 ====================

  // --- Google / Veo ---
  'veo3.1': 'Veo 3.1',
  'veo3.1-4k': 'Veo 3.1 4K',
  'veo3.1-pro': 'Veo 3.1 Pro',
  'veo3.1-pro-4k': 'Veo 3.1 Pro 4K',
  'veo3.1-fast': 'Veo 3.1 Fast',
  'veo3.1-components': 'Veo 3.1 Ghép tư liệu',
  'veo3.1-components-4k': 'Veo 3.1 Ghép tư liệu 4K',
  'veo3.1-fast-components': 'Veo 3.1 Fast Ghép tư liệu',
  'veo3': 'Veo 3',
  'veo3-fast': 'Veo 3 Fast',
  'veo3-pro': 'Veo 3 Pro',
  'veo3-fast-frames': 'Veo 3 Fast Khung đầu/cuối',
  'veo3-frames': 'Veo 3 Khung đầu/cuối',
  'veo3-pro-frames': 'Veo 3 Pro Khung đầu/cuối',
  'veo2': 'Veo 2',
  'veo2-fast': 'Veo 2 Fast',
  'veo2-fast-components': 'Veo 2 Fast Ghép tư liệu',
  'veo2-fast-frames': 'Veo 2 Fast Khung đầu/cuối',
  'veo2-pro': 'Veo 2 Pro',
  'veo2-pro-components': 'Veo 2 Pro Ghép tư liệu',
  // veo_ 下划线格式（同模型不同端点）
  'veo_3_1': 'Veo 3.1 (bất đồng bộ)',
  'veo_3_1-4K': 'Veo 3.1 4K (bất đồng bộ)',
  'veo_3_1-fast': 'Veo 3.1 Fast (bất đồng bộ)',
  'veo_3_1-fast-4K': 'Veo 3.1 Fast 4K (bất đồng bộ)',
  'veo_3_1-components': 'Veo 3.1 Ghép tư liệu (bất đồng bộ)',
  'veo_3_1-components-4K': 'Veo 3.1 Ghép tư liệu 4K (bất đồng bộ)',
  'veo_3_1-fast-components': 'Veo 3.1 Fast Ghép tư liệu (bất đồng bộ)',
  'veo_3_1-fast-components-4K': 'Veo 3.1 Fast Ghép tư liệu 4K (bất đồng bộ)',

  // --- Google TTS ---
  'gemini-2.5-flash-preview-tts': 'Gemini 2.5 Flash TTS',
  'gemini-2.5-pro-preview-tts': 'Gemini 2.5 Pro TTS',

  // --- OpenAI / Sora ---
  'sora-2': 'Sora 2',
  'sora-2-pro': 'Sora 2 Pro',
  'sora-2-all': 'Sora 2 (đảo ngược)',
  'sora-2-pro-all': 'Sora 2 Pro (đảo ngược)',
  'sora-2-vip-all': 'Sora 2 VIP (đảo ngược)',

  // --- Wan / 万相 ---
  'wan2.5-i2v-preview': 'Wanxiang 2.5 Ảnh sang video (Xem trước)',
  'wan2.6-i2v': 'Wanxiang 2.6 Ảnh sang video',
  'wan2.6-i2v-flash': 'Wanxiang 2.6 Ảnh sang video Flash',

  // --- Grok Video ---
  'grok-video-3': 'Grok Video 3',
  'grok-video-3-10s': 'Grok Video 3 (10s)',
  'grok-video-3-15s': 'Grok Video 3 (15s)',

  // --- Kling / 可灵 ---
  'kling-video': 'Kling Văn bản sang video',
  'kling-omni-video': 'Kling Omni Video',
  'kling-video-extend': 'Kling Kéo dài video',
  'kling-motion-control': 'Kling Điều khiển chuyển động',
  'kling-multi-elements': 'Kling Ghép đa thành phần',
  'kling-avatar-image2video': 'Kling Avatar Ảnh sang video',
  'kling-advanced-lip-sync': 'Kling Đồng bộ khẩu hình nâng cao',
  'kling-effects': 'Kling Hiệu ứng',
  'kling-audio': 'Kling Tạo âm thanh',
  'kling-custom-voices': 'Kling Giọng tùy chỉnh',
  'kling-custom-elements': 'Kling Chủ thể tùy chỉnh',
  // Kling 视频模型版本 (MemeFast model_version)
  'kling-v1': 'Kling V1',
  'kling-v1-5': 'Kling V1.5',
  'kling-v1-6': 'Kling V1.6',
  'kling-v2-master': 'Kling V2 Master',
  'kling-v2-1': 'Kling V2.1',
  'kling-v2-1-master': 'Kling V2.1 Master',
  'kling-v2-5-turbo': 'Kling V2.5 Turbo',
  'kling-v2-6': 'Kling V2.6',

  // --- Doubao / 豆包 / Seedance ---
  'doubao-seedance-1-0-pro-250528': 'Seedance 1.0 Pro',
  'doubao-seedance-1-0-pro-fast-251015': 'Seedance 1.0 Pro Fast',
  'doubao-seedance-1-0-lite-t2v-250428': 'Seedance 1.0 Lite T2V',
  'doubao-seedance-1-0-lite-i2v-250428': 'Seedance 1.0 Lite I2V',
  'doubao-seedance-1-5-pro-250428': 'Seedance 1.5 Pro',
  'doubao-seedance-1-5-pro-251215': 'Seedance 1.5 Pro',
  'doubao-seedance-1-0-lite-250428': 'Seedance 1.0 Lite',
  'doubao-seedance-1-0-pro-250428': 'Seedance 1.0 Pro',
  'doubao-seedance-1-5-lite-251215': 'Seedance 1.5 Lite',
  'doubao-seedance-1-5-pro-i2v-251215': 'Seedance 1.5 Pro Ảnh sang video',

  // --- Vidu ---
  'vidu2.0': 'Vidu 2.0',
  'viduq1': 'Vidu Q1',
  'viduq1-classic': 'Vidu Q1 Classic',
  'viduq2': 'Vidu Q2',
  'viduq2-pro': 'Vidu Q2 Pro',
  'viduq2-turbo': 'Vidu Q2 Turbo',
  'viduq3-pro': 'Vidu Q3 Pro',
  'aigc-video-vidu': 'Vidu (AIGC tổng hợp)',
  'vidu-video': 'Vidu Tạo video',
  'vidu-video-ref': 'Vidu Video tham chiếu',
  'vidu-video-character': 'Vidu Video nhân vật',
  'vidu-video-character-ref': 'Vidu Video tham chiếu nhân vật',
  'vidu-video-scene': 'Vidu Video bối cảnh',
  'vidu-video-scene-ref': 'Vidu Video tham chiếu bối cảnh',
  'vidu-video-lip-sync': 'Vidu Đồng bộ khẩu hình',

  // --- MiniMax / Hailuo ---
  'MiniMax-Hailuo-02': 'Hailuo 02',
  'MiniMax-Hailuo-2.3': 'Hailuo 2.3',
  'MiniMax-Hailuo-2.3-Fast': 'Hailuo 2.3 Fast',
  'aigc-video-hailuo': 'Hailuo (AIGC tổng hợp)',
  'minimax/video-01': 'MiniMax Video-01',
  'minimax/video-01-live': 'MiniMax Video-01 Live',
  'MiniMax-Hailuo-02-standard': 'Hailuo 02 Standard',
  'MiniMax-Hailuo-02-standard-i2v': 'Hailuo 02 Standard Ảnh sang video',
  'MiniMax-Hailuo-02-director': 'Hailuo 02 Director',
  'MiniMax-Hailuo-02-director-i2v': 'Hailuo 02 Director Ảnh sang video',
  'MiniMax-Hailuo-02-live': 'Hailuo 02 Live',
  'MiniMax-Hailuo-02-live-i2v': 'Hailuo 02 Live Ảnh sang video',

  // --- Runway ---
  'runwayml-gen3a_turbo-5': 'Runway Gen-3A Turbo 5s',
  'runwayml-gen3a_turbo-10': 'Runway Gen-3A Turbo 10s',
  'runwayml-gen4_turbo-5': 'Runway Gen-4 Turbo 5s',
  'runwayml-gen4_turbo-10': 'Runway Gen-4 Turbo 10s',
  'runway-gen4-turbo': 'Runway Gen-4 Turbo',
  'runway-gen4-turbo-i2v': 'Runway Gen-4 Turbo Ảnh sang video',
  'runway-gen3a-turbo': 'Runway Gen-3α Turbo',
  'runway-gen3a-turbo-i2v': 'Runway Gen-3α Turbo Ảnh sang video',

  // --- PixVerse ---
  'pixverse-v4': 'PixVerse V4',
  'pixverse-v4-i2v': 'PixVerse V4 Ảnh sang video',
  'pixverse-v3.5': 'PixVerse V3.5',
  'pixverse-v3.5-i2v': 'PixVerse V3.5 Ảnh sang video',

  // --- LTX ---
  'ltx-video': 'LTX Video',
  'ltx-video-i2v': 'LTX Video Ảnh sang video',

  // --- Luma ---
  'luma_video_api': 'Luma Tạo video',
  'luma_video_extend_api': 'Luma Kéo dài video',
  'luma-video': 'Luma Tạo video',
  'luma-video-ray2': 'Luma Ray 2',
  'luma-video-ray2-flash': 'Luma Ray 2 Flash',

  // --- Pika ---
  'pika-video': 'Pika Tạo video',
  'pika-video-2.2': 'Pika 2.2',

  // --- Hunyuan / 混元 ---
  'hunyuan-video': 'Hunyuan Video',

  // --- CogVideoX ---
  'cogvideox': 'CogVideoX',

  // --- OpenAI Audio ---
  'gpt-4o-audio-preview': 'GPT-4o Audio Preview',
  'gpt-4o-audio-preview-2024-10-01': 'GPT-4o Audio (2024-10)',
  'gpt-4o-audio-preview-2024-12-17': 'GPT-4o Audio (2024-12)',
  'gpt-4o-mini-audio-preview': 'GPT-4o Mini Audio',
  'gpt-4o-mini-audio-preview-2024-12-17': 'GPT-4o Mini Audio (2024-12)',

  // --- TTS ---
  'tts-1': 'TTS-1',
  'tts-1-1106': 'TTS-1 (1106)',
  'tts-1-hd': 'TTS-1 HD',
  'tts-1-hd-1106': 'TTS-1 HD (1106)',
  'audio1.0': 'Audio 1.0 Tổng hợp giọng nói',

  // --- Whisper ---
  'whisper-1': 'Whisper Chuyển giọng nói thành văn bản',

  // --- SunoAI ---
  'suno_music': 'Suno Tạo nhạc',
  'suno_lyrics': 'Suno Tạo lời bài hát',
  'suno_upload': 'Suno Tải âm thanh lên',
  'suno_fetch': 'Suno Truy vấn tác vụ',
};

/**
 * 获取模型的友好显示名
 * 优先查映射表，查不到返回原始 ID
 */
export function getModelDisplayName(modelId: string): string {
  return MODEL_DISPLAY_NAMES[modelId] ?? modelId;
}
