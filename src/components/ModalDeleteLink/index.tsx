import { useContext } from 'react'
import { MdClose } from 'react-icons/md'
import { ModalDeleteLinkContext } from '../../contexts/ModalDeleteLinkContext'
import api from '../../services/api'
import { Container, Box, CloseButton } from './style'

interface LinkId {
  id: string
}

const ModalDeleteLink: React.FC<LinkId> = ({id}) => {
  const { closeModalDeleteLink } = useContext(ModalDeleteLinkContext)

  const deleteLink = async () => {
    api.delete(`link/${id}`)
    closeModalDeleteLink()
  }
  
  return (
    <Container>
      <Box>
        <h3>Deseja mesmo excluir este link?</h3>
        <div>
          <button type="button" onClick={deleteLink}>Sim</button>
          <button type="button" onClick={closeModalDeleteLink}>Não</button>
        </div>
        <CloseButton type="button" onClick={closeModalDeleteLink}>
          <MdClose color="#c9d1d9" />
        </CloseButton>
      </Box>
    </Container>
  )
}

export default ModalDeleteLink