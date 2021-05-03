import { useContext } from 'react'
import { Box, Container, CloseButton } from './style'
import { MdClose } from 'react-icons/md'

import { ModalCreatePostContext } from '../../contexts/ModalCreatePostContext'

const ModalCreatePost: React.FC = () => {
  const { closeModal } = useContext(ModalCreatePostContext)

  return (
    <Container>
      <Box>
        <input placeholder="title" type="text"/>
        <input placeholder="url" type="text"/>
        <div>
          <select>
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
          <button type="button">Criar</button>
        </div>
        <CloseButton type="button" onClick={closeModal}>
          <MdClose color="#c9d1d9" />
        </CloseButton>
      </Box>
    </Container>
  )
}

export default ModalCreatePost