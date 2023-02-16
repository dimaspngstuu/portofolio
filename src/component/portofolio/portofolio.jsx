import React from 'react'
import './portofolio.css'
import IMG from '../../asset/DIMAS.JPG';

const Portofolio = () => {
  return (
    <section id="Portofolio">
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>

      <div className="container portofolio__container">

        <article className="portofolio__item">
          <div className="portofolio__item-image">
              <img src={IMG}  alt="" />
            </div>
            <h3>This is a portofolio item title</h3>
            <div className="portofolio__item-cta">
              <a href="https://github.com" className="btn" target="__blank">Github</a>
              <a href="https://github.com" className="btn btn-primary" target="__blank">Demo Project</a>
            </div>
        </article> 

         <article className="portofolio__item">
          <div className="portofolio__item-image">
            <img src={IMG}  alt="" />
          </div>
          <h3>This is a portofolio item title</h3>
          <div className="portofolio__item-cta">
            <a href="https://github.com" className="btn" target="__blank">Github</a>
            <a href="https://github.com" className="btn btn-primary" target="__blank">Demo Project</a>
          </div>
        </article>

        <article className="portofolio__item">
          <div className="portofolio__item-image">
            <img src={IMG}  alt="" />
          </div>
          <h3>This is a portofolio item title</h3>
         <div className="portofolio__item-cta">
            <a href="https://github.com" className="btn" target="__blank">Github</a>
            <a href="https://github.com" className="btn btn-primary" target="__blank">Demo Project</a>
          </div>
        </article>

        <article className="portofolio__item">
          <div className="portofolio__item-image">
              <img src={IMG}  alt="" />
            </div>
            <h3>This is a portofolio item title</h3>
            <div className="portofolio__item-cta">
              <a href="https://github.com" className="btn" target="__blank">Github</a>
              <a href="https://github.com" className="btn btn-primary" target="__blank">Demo Project</a>
            </div>
        </article> 

         <article className="portofolio__item">
          <div className="portofolio__item-image">
            <img src={IMG}  alt="" />
          </div>
          <h3>This is a portofolio item title</h3>
         <div className="portofolio__item-cta">
              <a href="https://github.com" className="btn" target="__blank">Github</a>
              <a href="https://github.com" className="btn btn-primary" target="__blank">Demo Project</a>
          </div>
        </article>

        <article className="portofolio__item">
          <div className="portofolio__item-image">
            <img src={IMG}  alt="" />
          </div>
          <h3>This is a portofolio item title</h3>
          <div className="portofolio__item-cta">
              <a href="https://github.com" className="btn" target="__blank">Github</a>
              <a href="https://github.com" className="btn btn-primary" target="__blank">Demo Project</a>
            </div>
        </article>

         
       
      </div>
    </section>
  )
}

export default Portofolio