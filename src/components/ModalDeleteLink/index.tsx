import { MdClose } from 'react-icons/md'
import api from '../../services/api'
import { Container, Box, CloseButton } from './style'

import DeleteLink from '../../events/DeleteLinkEvents'

interface LinkTitle {
  title: string
}

const ModalDeleteLink: React.FC<LinkTitle> = ({title}) => {
  const deleteLink = async () => {
    api.delete(`link/${title}`)
    DeleteLink.emit('currentTitle', '')
  }

  const closeModal = () => {
    DeleteLink.emit('currentTitle', '')
  }
  
  return (
    <Container>
      <Box>
        <h3>Deseja mesmo excluir o link {title}?</h3>
        <div>
          <button type="button" onClick={deleteLink}>Sim</button>
          <button type="button" onClick={closeModal}>Não</button>
        </div>
        <CloseButton type="button" onClick={closeModal}>
          <MdClose color="#c9d1d9" />
        </CloseButton>
      </Box>
    </Container>
  )
}

export default ModalDeleteLink