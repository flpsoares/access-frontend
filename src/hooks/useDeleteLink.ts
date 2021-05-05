import { useState, useEffect } from 'react'

import DeleteLink from '../events/DeleteLinkEvents'

export function useDeleteLink() {
  const [id, setId] = useState<string>()

  useEffect(() => {
    DeleteLink.on('currentId', setId)
    return () => {
      DeleteLink.off('currentId', setId)
    }
  }, [])

  return {id}
}