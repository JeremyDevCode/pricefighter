import { useEffect, useState } from 'react'

/**
 * Hook that allows to interact with FullScreen API.
 * @typedef {Object} FullScreen
 * @property {Boolean} fullscreen Indicates whether the fullscreen is enabled
 * @property {Function} setFullscreen Function to set the fullscreen mode
 *
 */
export const useFullScreenListener = () => {
  const [fullscreen, setFullscreen] = useState(false)

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
    } else if (document.exitFullscreen) {
      document.exitFullscreen()
    }
  }

  useEffect(() => {
    document.addEventListener('fullscreenchange', () => {
      if (document.fullscreenElement) setFullscreen(true)
      else setFullscreen(false)
    })
    return () =>
      document.removeEventListener('fullscreenchange', () => {
        if (document.fullscreenElement) setFullscreen(true)
        else setFullscreen(false)
      })
  }, [])

  return { fullscreen, toggleFullscreen }
}
