import { Container, Content, Cellphone, AddLinkButton, ModalCell } from './style'
import Post from '../Post'
import ModalCreatePost from '../ModalCreatePost'
import { useContext } from 'react'
import { ModalCreatePostContext } from '../../contexts/ModalCreatePostContext'

const Link: React.FC = () => {
  const { isOpen, openModal } = useContext(ModalCreatePostContext)

  return(
    <Container>
      { isOpen && <ModalCreatePost /> }
      <Content>
        <AddLinkButton onClick={openModal}>
          Adicionar novo link
        </AddLinkButton>
        <Post />
        <Post />
      </Content>
      <Cellphone>
        <ModalCell></ModalCell>
      </Cellphone>
    </Container>
  )
}

export default Link