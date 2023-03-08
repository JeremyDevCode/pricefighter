import React from 'react'
import { useSoundEffects } from '../context/SoundEffectsContext'

export const AudioComponent = () => {
  const { ref } = useSoundEffects()
  return (
    <>
      <audio ref={ref.ok} src="/sounds/ok.wav">
        Your browser does not support the
        <code>audio</code> element.
      </audio>
      <audio ref={ref.fail} src="/sounds/fail.wav">
        Your browser does not support the
        <code>audio</code> element.
      </audio>
      <audio ref={ref.intro} src="/sounds/intro.wav">
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    </>
  )
}
