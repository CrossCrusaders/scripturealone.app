import { ref } from 'vue'
import { setLocalCacheItem } from '../../../cache/services/LocalStorageService'

export enum VideoPlayerState {
  miniPaused, // visible stopped
  miniPlaying, // visible playing
  hidden,   // hidden stopped
  fullscreenPaused,
  fullscreenPlaying,
}

const globalVideoPayload = ref<GlobalVideoPayload | null>(null)
const globalVideoState = ref<VideoPlayerState>(VideoPlayerState.hidden)
const videoStateLocalStorageKey = '__global_video_state__'

export interface GlobalVideoPayload {
  id?: string // TODO: maybe just the URL can serve as ID
  url?: string
  title?: string
  author?: string
  currentTime?: number
  contentPage?: string
}

export function useGlobalVideoPlayer() {
  return {
    setGlobalVideoState(state: VideoPlayerState) {
      globalVideoState.value = state
    },
    setGlobalVideoPayload(payload: GlobalVideoPayload) {
      globalVideoPayload.value = { ...payload }
      setLocalCacheItem(videoStateLocalStorageKey, globalVideoPayload.value)
    },
    globalVideoPayload,
    globalVideoState
  }
}