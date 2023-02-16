import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../asset/cikurayfix.png'
import Headersocial from './headersocial'

const Header = () => {
  return (
    <header>
        <div className='container header__container'>
            <h5>Hello i'm</h5>
            <h1>Dimas Pangestu</h1>
            <div className="text-light">Frontend Developer</div>
            <CTA />
            <Headersocial />

            <div className='me'>
                <img src={ME} alt="" />
            </div>

            <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header