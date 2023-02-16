import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'



const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Dimas Pangestu</a>




      <ul className='permalink'>
        <li><a href="#">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#service">Service</a></li>
        <li><a href="#portofolio">Portofolio</a></li>
        <li><a href="#testimonial">Testimonial</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://facebook.com" target="__blank"><BsFacebook/></a>
        <a href="https://instagram.com" target="__blank"><AiOutlineInstagram/></a>
        <a href="https://twitter" target="__blank"><BsTwitter/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Dimas Portofolio , All right reserved</small>
      </div>
    </footer>
  )
}

export default Footer