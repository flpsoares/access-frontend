import { useState, createContext, ReactNode } from 'react'

interface ModalCreateLinkContextData {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

interface ModalCreateLinkProviderProps {
  children: ReactNode
}

export const ModalCreateLinkContext = createContext({} as ModalCreateLinkContextData)

export function ModalCreateLinkProvider({children}: ModalCreateLinkProviderProps) {
  const [isOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <ModalCreateLinkContext.Provider value={{isOpen, openModal, closeModal}}>
      {children}
    </ModalCreateLinkContext.Provider>
  )
}