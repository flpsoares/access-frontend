import { useState, createContext, ReactNode } from 'react'

interface ModalCreateLinkContextData {
  modalCreateLinkIsOpen: boolean
  openModalCreateLink: () => void
  closeModalCreateLink: () => void
}

interface ModalCreateLinkProviderProps {
  children: ReactNode
}

export const ModalCreateLinkContext = createContext({} as ModalCreateLinkContextData)

export function ModalCreateLinkProvider({children}: ModalCreateLinkProviderProps) {
  const [modalCreateLinkIsOpen, setModalCreateLinkIsOpen] = useState(false)

  function openModalCreateLink() {
    setModalCreateLinkIsOpen(true)
  }

  function closeModalCreateLink() {
    setModalCreateLinkIsOpen(false)
  }

  return (
    <ModalCreateLinkContext.Provider value={{modalCreateLinkIsOpen, openModalCreateLink, closeModalCreateLink}}>
      {children}
    </ModalCreateLinkContext.Provider>
  )
}