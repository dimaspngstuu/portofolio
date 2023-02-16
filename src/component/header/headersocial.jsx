import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsGithub} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'

const Headersocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="__blank"><AiFillLinkedin/></a>
        <a href="https://github.com" target="__blank"><BsGithub/></a>
        <a href="https://instagram.com" target="__blank"> <AiFillInstagram/></a>
    </div>
  )
}

export default Headersocial