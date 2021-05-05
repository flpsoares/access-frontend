import { useState, createContext, ReactNode } from 'react'

interface ModalDeleteLinkContextData {
  modalDeleteLinkIsOpen: boolean
  openModalDeleteLink: () => void
  closeModalDeleteLink: () => void
}

interface ModalDeleteLinkProviderProps {
  children: ReactNode
}

export const ModalDeleteLinkContext = createContext({} as ModalDeleteLinkContextData)

export function ModalDeleteLinkProvider({children}: ModalDeleteLinkProviderProps) {
  const [modalDeleteLinkIsOpen, setModalDeleteLinkIsOpen] = useState(false)

  function openModalDeleteLink() {
    setModalDeleteLinkIsOpen(true)
  }

  function closeModalDeleteLink() {
    setModalDeleteLinkIsOpen(false)
  }

  return (
    <ModalDeleteLinkContext.Provider value={{modalDeleteLinkIsOpen, openModalDeleteLink, closeModalDeleteLink}}>
      {children}
    </ModalDeleteLinkContext.Provider>
  )
}