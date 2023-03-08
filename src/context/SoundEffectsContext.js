import { useRef, useContext, createContext } from 'react'
import { useSettings } from './SettingsContext'

const SoundEffectsContext = createContext()

export const useSoundEffects = () => {
  const context = useContext(SoundEffectsContext)
  if (!context) {
    throw new Error('Missing SoundEffectsProvider to use SoundEffects context')
  }
  return context
}

export const SoundEffectsProvider = ({ children }) => {
  const { soundEffects } = useSettings()
  const intro = useRef()
  const ok = useRef()
  const fail = useRef()

  function Intro() {
    if (soundEffects) intro.current.play()
  }

  function Ok() {
    if (soundEffects) ok.current.play()
  }

  function Fail() {
    if (soundEffects) fail.current.play()
  }

  return (
    <SoundEffectsContext.Provider
      value={{ play: { Intro, Ok, Fail }, ref: { intro, ok, fail } }}
    >
      {children}
    </SoundEffectsContext.Provider>
  )
}
