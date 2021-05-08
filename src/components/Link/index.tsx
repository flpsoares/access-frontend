import { Container } from './style'

import { BiEditAlt } from 'react-icons/bi'
import { MdDelete } from 'react-icons/md'
import { IoIosEye } from 'react-icons/io'

import DeleteLink from '../../events/DeleteLinkEvents'
import UpdateLinkEvents from '../../events/UpdateLinkEvents'

import { 
  FaFacebookF,
  FaInstagram,
  FaGoogle,
  FaTwitter,
  FaPinterestP,
  FaBitcoin,
  FaYoutube
} from 'react-icons/fa'

import { SiTiktok } from 'react-icons/si'
import { useState, useEffect } from 'react'
import { IconBaseProps } from 'react-icons'
import api from '../../services/api'

interface LinkProps {
  title: string,
  url: string,
  icon: string,
  views: string
}

const Link: React.FC<LinkProps> = ({ title, url, icon, views}) => {
  const [currentIcon, setCurrentIcon] = useState<IconBaseProps>()

  useEffect(() => {
    switch(icon) {
      case 'nenhuma':

      break;
      case 'facebook':
        setCurrentIcon(<FaFacebookF />)
      break;
      case 'instagram':
        setCurrentIcon(<FaInstagram />)
      break;
      case 'google':
        setCurrentIcon(<FaGoogle />)
      break;
      case 'twitter':
        setCurrentIcon(<FaTwitter />)
      break;
      case 'pinterest':
        setCurrentIcon(<FaPinterestP />)
      break;
      case 'bitcoin': 
        setCurrentIcon(<FaBitcoin />)
      break;
      case 'tiktok':
        setCurrentIcon(<SiTiktok />)
      break;
      case 'youtube': 
        setCurrentIcon(<FaYoutube />)
      break;
    }
  }, [icon])

  const getLinkTitleDelete = () => {
    api.get(`link/${title}`).then(res => {
      DeleteLink.emit('currentTitle', res.data.title)
    })
  }

  const getLinkTitleUpdate = () => {
    api.get(`link/${title}`).then(res => {
      UpdateLinkEvents.emit('currentId', res.data.id)
      UpdateLinkEvents.emit('currentTitle', res.data.title)
      UpdateLinkEvents.emit('currentUrl', res.data.url)
      UpdateLinkEvents.emit('currentIcon', res.data.icon)
    })
  }

  return (
    <Container>
      <div>
        <button type="button">{currentIcon}</button>
      </div>
      <div>
        <span>{title}</span>
      </div>
      <div>
        <button onClick={getLinkTitleUpdate}>
          <BiEditAlt />
        </button>
        <button onClick={getLinkTitleDelete}>
          <MdDelete color="red" />
        </button>
      </div>
      <div>
        <span>{url}</span>
      </div>
      <div>
        <button>
          <IoIosEye />
          <span>{views}</span>
        </button>
      </div>
    </Container>
  )
}

export default Link