import React from 'react'
import './testimonial.css'
import AVT_1 from '../../asset/avatar1.jpg'
import AVT_2 from '../../asset/avatar2.jpg'
import AVT_3 from '../../asset/avatar3.jpg'
import AVT_4 from '../../asset/avatar4.jpg'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';




const data = [
            {
                avatar:AVT_1,
                name:'Ilham Nugraha',
                review:'Lorem ipsumLorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda magni quas'
            },
            {
                avatar:AVT_2,
                name:'Labib Hibatullah',
                review:'Lorem ipsumLorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda magni quas'
            },
            {
                avatar:AVT_3,
                name:'Hamdani Yunus Yunadi',
                review:'Lorem ipsumLorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda magni quas'
            },
             {
                avatar:AVT_4,
                name:'Surya Nur',
                review:'Lorem ipsumLorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda magni quas'
            }
        ]

const Testimonial = () => {
  return (
    
    <section id="testimonial">
      
      <h5>Review From Client</h5>
      <h2>Testimonial</h2>

      <Swiper className="container testimonial__container"
         // install Swiper modules
         modules={Pagination}
         spaceBetween={30}
         slidesPerView={1}
         pagination={{ clickable: true }}>
        {
          data.map(({avatar,name,review},index)=>{
            return (
            <SwiperSlide key={index} className='testimonial'>
              <div className='client__testimonial'>
                <img className='client__avatar' src={avatar}/>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </div>
          </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonial