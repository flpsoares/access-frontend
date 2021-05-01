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
          <select name="" id="">
            <option value="">None</option>
            <option value="">Facebook</option>
            <option value="">Instagram</option>
            <option value="">Google</option>
            <option value="">Twitter</option>
            <option value="">Pinterest</option>
            <option value="">Bitcoin</option>
            <option value="">Tik tok</option>
            <option value="">Youtube</option>
          </select>
          <button type="button">Criar</button>
        </div>
        <CloseButton type="button" onClick={closeModal}>
          <MdClose />
        </CloseButton>
      </Box>
    </Container>
  )
}

export default ModalCreatePost