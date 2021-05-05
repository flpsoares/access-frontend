import { useContext, useRef } from 'react'
import { Box, Container, CloseButton } from './style'
import { MdClose } from 'react-icons/md'

import { ModalCreateLinkContext } from '../../contexts/ModalCreateLinkContext'
import api from '../../services/api'

const ModalCreateLink: React.FC = () => {
  const { closeModalCreateLink } = useContext(ModalCreateLinkContext)

  const titleRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const urlRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const iconRef = useRef() as React.MutableRefObject<HTMLSelectElement>;

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    closeModalCreateLink()

    await api.post('link', {
      title: titleRef.current.value,
      url: urlRef.current.value,
      icon: iconRef.current.value
    })
  }

  return (
    <Container>
      <Box>
        <form method="post">
          <input ref={titleRef} placeholder="title" type="text"/>
          <input ref={urlRef} placeholder="url" type="text"/>
          <div>
            <select ref={iconRef}>
              <option value="none">None</option>
              <option value="facebook">Facebook</option>
              <option value="instagram">Instagram</option>
              <option value="google">Google</option>
              <option value="twitter">Twitter</option>
              <option value="pinterest">Pinterest</option>
              <option value="bitcoin">Bitcoin</option>
              <option value="tiktok">Tik tok</option>
              <option value="youtube">Youtube</option>
            </select>
            <button onClick={handleSubmit}>Criar</button>
          </div>
        </form>
        <CloseButton type="button" onClick={closeModalCreateLink}>
          <MdClose color="#c9d1d9" />
        </CloseButton>
      </Box>
    </Container>
  )
}

export default ModalCreateLink