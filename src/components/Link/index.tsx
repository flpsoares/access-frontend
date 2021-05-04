import { Container, Content, Cellphone, AddLinkButton, ModalCell } from './style'
import Post from '../Post'
import ModalCreatePost from '../ModalCreatePost'
import { useContext, useEffect, useState } from 'react'
import { ModalCreatePostContext } from '../../contexts/ModalCreatePostContext'
import api from '../../services/api'

interface LinkProps {
  id: number,
  title: string,
  url: string,
  icon: string,
  views: string,
}

// interface LinkProps {
//   posts: PostProps[]
// }

const Link: React.FC = () => {
  const { isOpen, openModal } = useContext(ModalCreatePostContext)

  const [posts, setPosts] = useState<LinkProps[]>()

  useEffect(() => {
    api.get('links').then(res => {
      setPosts(res.data)
    })
  }, [posts])


  return(
    <Container>
      { isOpen && <ModalCreatePost /> }
      <Content>
        <AddLinkButton onClick={openModal}>
          Adicionar novo link
        </AddLinkButton>
        {
          posts?.map((post: LinkProps) => {
            return (
              <Post
                key={post.id}
                title={post.title}
                url={post.url}
                icon={post.icon}
                views={post.views}
              />
            )
          })
        }
      </Content>
      <Cellphone>
        <ModalCell></ModalCell>
      </Cellphone>
    </Container>
  )
}

export default Link