import { useState, ReactNode, createContext } from 'react'

interface MoreLinkData {
  linksLength: number
  linkUpdated: boolean
  addLink: () => void
  removeLink: () => void
  updateLink: () => void
  setLinksLength: (linksLength: number) => void
  setLinkUpdated: (linkUpdate: boolean) => void
}

interface MoreLinkProviderProps {
  children: ReactNode
}

export const MoreLink = createContext({} as MoreLinkData)

export function MoreLinkProvider({children}: MoreLinkProviderProps) {
  const [linksLength, setLinksLength] = useState(0)
  const [linkUpdated, setLinkUpdated] = useState(false)

  const addLink = () => {
    setLinksLength(linksLength + 1)
  }

  const removeLink = () => {
    setLinksLength(linksLength - 1)
  }
  
  const updateLink = () => {
    setLinkUpdated(!linkUpdated)
  }

  return (
    <MoreLink.Provider value={{linksLength, linkUpdated, addLink, removeLink, updateLink, setLinksLength, setLinkUpdated}}>
      {children}
    </MoreLink.Provider>
  )
}