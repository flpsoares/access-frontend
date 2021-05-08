import { useRef, MutableRefObject, useContext } from 'react'
import { MdClose } from 'react-icons/md'
import { Container, Box, CloseButton } from './style'

import UpdateLinkEvents from '../../events/UpdateLinkEvents'
import api from '../../services/api'
import { MoreLink } from '../../contexts/MoreLinkContext'

interface LinkProps {
  id?: string
  title?: string
  url?: string
  icon?: string
}

const ModalUpdateLink: React.FC<LinkProps> = ({id, title, url, icon}) => {
  const { updateLink } = useContext(MoreLink)

  const titleRef = useRef() as MutableRefObject<HTMLInputElement>;
  const urlRef = useRef() as MutableRefObject<HTMLInputElement>;
  const iconRef = useRef() as MutableRefObject<HTMLSelectElement>;
  
  const closeModal = () => {
    UpdateLinkEvents.emit('currentTitle', '')
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    
    await api.put(`link/${id}`, {
      title: titleRef.current.value,
      url: urlRef.current.value,
      icon: iconRef.current.value
    })
    
    updateLink()
    closeModal()
  }

  return (
    <Container>
      <Box>
        <form method="post">
          <div>
            <select defaultValue="nenhuma" ref={iconRef}>
              <option value="nenhuma">Nenhuma</option>
              <option value="facebook">Facebook</option>
              <option value="instagram">Instagram</option>
              <option value="google">Google</option>
              <option value="twitter">Twitter</option>
              <option value="pinterest">Pinterest</option>
              <option value="bitcoin">Bitcoin</option>
              <option value="tiktok">Tik tok</option>
              <option value="youtube">Youtube</option>
            </select>
            <input ref={titleRef} defaultValue={title} type="text"/>
          </div>
          <div>
            <input ref={urlRef} defaultValue={url} type="text"/>
          </div>
          <button onClick={handleSubmit}>Atualizar</button>
        </form>
        <CloseButton type="button" onClick={closeModal}>
          <MdClose color="#c9d1d9" />
        </CloseButton>
      </Box>
    </Container>
  )
}

export default ModalUpdateLink

