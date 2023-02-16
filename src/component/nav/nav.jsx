import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiUser} from 'react-icons/bi'
import {BiBookOpen} from 'react-icons/bi'
import {MdOutlineMiscellaneousServices} from 'react-icons/md'
import {IoMdContacts} from 'react-icons/io'
import { useState } from 'react'

const Nav = () => {
  const [activeNav,setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={()=>setActiveNav('#')} className={activeNav === '#' ? 'active': ''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}><BiUser/></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active': ''}><BiBookOpen/></a>
      <a href="#service" onClick={()=> setActiveNav('#service')} className={activeNav === '#service' ? 'active': ''}><MdOutlineMiscellaneousServices/></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active': ''}><IoMdContacts/></a>
    </nav>
  )
}

export default Nav 