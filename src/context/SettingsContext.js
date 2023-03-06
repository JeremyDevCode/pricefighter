import { createContext, useContext, useState } from 'react'

const SettingsContext = createContext()

/**
 * Hook manage game settings
 * @typedef {Object} SettingsObject
 * @property {boolean} soundEffects - Indicates if game sounds are enabled
 * @property {boolean} streamerMode - Indicates if the streamer mode is enabled
 * @property {function} setSoundEffects - Function that enables or disables the sound effects
 * @property {function} setStreamerMode - Function that enables or disables the streamer mode
 * @returns { SettingsObject } Object with game settings.
 * @throws Will throw an error if the `SettingsProvider` is missing
 */
export const useSettings = () => {
  const context = useContext(SettingsContext)
  if (!context) {
    throw new Error('Missing SettingsProvider to use cart context')
  }
  return context
}

const SettingsProvider = ({ children }) => {
  const [soundEffects, setSoundEffects] = useState(true)
  const [streamerMode, setStreamerMode] = useState(false)

  return (
    <SettingsContext.Provider
      value={{
        soundEffects,
        streamerMode,
        setSoundEffects,
        setStreamerMode
      }}
    >
      {children}
    </SettingsContext.Provider>
  )
}

export { SettingsProvider }
