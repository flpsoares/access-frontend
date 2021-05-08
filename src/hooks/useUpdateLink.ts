import { useState, useEffect } from 'react'

import UpdateLink from '../events/UpdateLinkEvents'

export function useUpdateLink() {
  const [updateId, setUpdateId] = useState<string>()
  const [updateTitle, setUpdateTitle] = useState<string>()
  const [updateUrl, setUpdateUrl] = useState<string>()
  const [updateIcon, setUpdateIcon] = useState<string>()

  useEffect(() => {
    UpdateLink.on('currentId', setUpdateId)
    UpdateLink.on('currentTitle', setUpdateTitle)
    UpdateLink.on('currentUrl', setUpdateUrl)
    UpdateLink.on('currentIcon', setUpdateIcon)
    return () => {
    UpdateLink.off('currentId', setUpdateId)
    UpdateLink.off('currentTitle', setUpdateTitle)
    UpdateLink.off('currentUrl', setUpdateUrl)
    UpdateLink.off('currentIcon', setUpdateIcon)
    }
  }, [])

  return {updateId, updateTitle, updateUrl, updateIcon}
}