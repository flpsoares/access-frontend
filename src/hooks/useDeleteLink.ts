import { useState, useEffect } from 'react'

import DeleteLink from '../events/DeleteLinkEvents'

export function useDeleteLink() {
  const [title, setTitle] = useState<string>()

  useEffect(() => {
    DeleteLink.on('currentTitle', setTitle)
    return () => {
      DeleteLink.off('currentTitle', setTitle)
    }
  }, [])

  return {title}
}