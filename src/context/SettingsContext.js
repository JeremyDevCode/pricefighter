import { createContext, useContext, useState } from 'react'

const SettingsContext = createContext()

export const useSettings = () => {
  const context = useContext(SettingsContext)
  if (!context) {
    throw new Error('Missing CartContextProvider to use cart context')
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
