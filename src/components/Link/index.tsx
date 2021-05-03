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
        <Post 
          title='Meu facebook'
          icon='facebook'
          url='https://www.facebook.com/filipe.soares.7121/'
          views='7'
        />
        <Post
          title='Meu instagram'
          icon='instagram'
          url='https://www.instagram.com/filipeseventeen/'
          views='900'
        />
        <Post
          title='Meu twitter'
          icon='twitter'
          url='https://twitter.com/meykfeel'
          views='27'
        />
      </Content>
      <Cellphone>
        <ModalCell></ModalCell>
      </Cellphone>
    </Container>
  )
}

export default Link