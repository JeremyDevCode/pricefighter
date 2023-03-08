import { createContext, useContext, useState } from 'react'

const ModalContext = createContext()

export const useModal = () => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('Missing ModalProvider to use cart context')
  }
  return context
}

const ModalProvider = ({ children }) => {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <ModalContext.Provider
      value={{
        modalVisible,
        setModalVisible
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export { ModalProvider }
