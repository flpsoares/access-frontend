import { Container } from './style'

import { BiEditAlt } from 'react-icons/bi'
import { MdDelete } from 'react-icons/md'
import { IoIosEye } from 'react-icons/io'

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

interface PostProps {
  title: string,
  url: string,
  icon: string,
  views: string
}

const Post: React.FC<PostProps> = ({ title, url, icon, views }) => {
  const [currentIcon, setCurrentIcon] = useState<IconBaseProps>()

  useEffect(() => {
    switch(icon) {
      case 'none':
        
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

  return (
    <Container>
      <div>
        {
          currentIcon
        }
      </div>
      <div>
        <span>{title}</span>
      </div>
      <div>
        <button>
          <BiEditAlt />
        </button>
        <button>
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

export default Post