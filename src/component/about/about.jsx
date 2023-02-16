import React from 'react'
import './about.css';
import ME from '../../asset/IMG_1938.JPG';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {AiFillFolder} from 'react-icons/ai'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>


      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icons'/>
              <h5>Experience</h5>
              <small>Dont Have Experience</small>
            </article>
            <article className="about__card">
              <FiUsers className='about__icons'/>
              <h5>Clients</h5>
              <small>Not Yet</small>
            </article>
            <article className="about__card">
              <AiFillFolder className='about__icons'/>
              <h5>projects</h5>
              <small>2+ Completed Project</small>
            </article>
          </div>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.     
            Laudantium, ex quod quia temporibus et est distinctio rem, 
            atque, modi neque eius ratione magni illo molestiae. Animi 
            voluptate voluptas temporibus nemo.
          </p>
      
          <a href="" className='btn btn-primary'>Let's Talk with Me</a> 
        </div>
      </div>
    </section>
  )
}

export default About