import { useState, createContext, ReactNode } from 'react'

interface ModalCreatePostContextData {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

interface ModalCreatePostProviderProps {
  children: ReactNode
}

export const ModalCreatePostContext = createContext({} as ModalCreatePostContextData)

export function ModalCreatePostProvider({children}: ModalCreatePostProviderProps) {
  const [isOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <ModalCreatePostContext.Provider value={{isOpen, openModal, closeModal}}>
      {children}
    </ModalCreatePostContext.Provider>
  )
}