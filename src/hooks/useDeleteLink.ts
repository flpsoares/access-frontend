import { useState, useEffect } from 'react'

import DeleteLink from '../events/DeleteLinkEvents'

export function useDeleteLink() {
  const [deleteTitle, setDeleteTitle] = useState<string>()

  useEffect(() => {
    DeleteLink.on('currentTitle', setDeleteTitle)
    return () => {
      DeleteLink.off('currentTitle', setDeleteTitle)
    }
  }, [])

  return {deleteTitle}
}