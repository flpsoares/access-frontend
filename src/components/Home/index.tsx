import { useContext, useEffect, useState } from 'react'
import Link from '../Link'
import api from '../../services/api'

import { Container, Content, Cellphone, AddLinkButton, ModalCell } from './style'
import { ModalCreateLinkContext } from '../../contexts/ModalCreateLinkContext'

import { useDeleteLink } from '../../hooks/useDeleteLink'
import { useUpdateLink } from '../../hooks/useUpdateLink'

import ModalCreateLink from '../ModalCreateLink'
import ModalDeleteLink from '../ModalDeleteLink'
import ModalUpdateLink from '../ModalUpdateLink'
import { MoreLink } from '../../contexts/MoreLinkContext'
// import DeleteLinkEvents from '../../events/DeleteLinkEvents'

interface LinkProps {
  id: number,
  title: string,
  url: string,
  icon: string,
  views: string,
}

const Home: React.FC = () => {
  const { modalCreateLinkIsOpen, openModalCreateLink } = useContext(ModalCreateLinkContext)
  const {  setLinksLength, linksLength, setLinkUpdated, linkUpdated } = useContext(MoreLink)

  const { deleteTitle } = useDeleteLink()

  const { updateId, updateTitle, updateUrl, updateIcon } = useUpdateLink()

  const [links, setLinks] = useState<LinkProps[]>([])


  useEffect(() => {
    api.get('links').then(res => {
      setLinks(res.data)
      setLinksLength(res.data.length)
    })
  }, [linksLength, setLinksLength, linkUpdated, setLinkUpdated])

  return(
    <Container>
      { modalCreateLinkIsOpen && <ModalCreateLink /> }
      { deleteTitle && <ModalDeleteLink title={deleteTitle} /> }
      { updateTitle && <ModalUpdateLink id={updateId} title={updateTitle} url={updateUrl} icon={updateIcon} /> }
      
      <Content>
        <AddLinkButton onClick={openModalCreateLink}>
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