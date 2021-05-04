import { Container, Content, Cellphone, AddLinkButton, ModalCell } from './style'
import Link from '../Link'
import ModalCreateLink from '../ModalCreateLink'
import { useContext, useEffect, useState } from 'react'
import { ModalCreateLinkContext } from '../../contexts/ModalCreateLinkContext'
import api from '../../services/api'

interface LinkProps {
  id: number,
  title: string,
  url: string,
  icon: string,
  views: string,
}

const Home: React.FC = () => {
  const { isOpen, openModal } = useContext(ModalCreateLinkContext)

  const [links, setLinks] = useState<LinkProps[]>()

  useEffect(() => {
    api.get('links').then(res => {
      setLinks(res.data)
    })
  }, [links])


  return(
    <Container>
      { isOpen && <ModalCreateLink /> }
      <Content>
        <AddLinkButton onClick={openModal}>
          Adicionar novo link
        </AddLinkButton>
        {
          links?.map((link: LinkProps) => {
            return (
              <Link
                key={link.id}
                title={link.title}
                url={link.url}
                icon={link.icon}
                views={link.views}
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

export default Home