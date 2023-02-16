import React from 'react';
import './contact.css';
import {MdOutlineMail} from 'react-icons/md/'
import {BsMessenger} from 'react-icons/bs/'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import { useRef } from 'react'
import emailjs from "@emailjs/browser";



const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_mumjh7j', 'template_nc4x7vg', form.current, 'mN5tv5uDscA_zxpuv')

      e.target.reset()
    }
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>


      <div className='container contact__container'>
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>dimaspngstuu123</h5>
            <a href="mailto:dimaspngstuu123@gmail.com" target="__blank">Send a message</a>
          </article>

          <article className='contact__option'>
            <BsMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Dimas Pangestu</h5>
            <a href="https://m.me/100028880026845" target="__blank">Send a message</a>
          </article>

          <article className='contact__option'>
            <AiOutlineWhatsApp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>0895422651609</h5>
            <a href="https://api.whatsapp.com/send?phone=+62895422651609" target="__blank">Send a message</a>
          </article>
        </div>
       
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Your Message</button>
          
        </form>
      </div>
    </section>
  )
}


export default Contact