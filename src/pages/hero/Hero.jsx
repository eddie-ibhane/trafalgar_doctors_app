import React from 'react'
import './hero.css'
import HeroImg from '../../assets/hero.png'

const Hero = () => {
  return (
    <div>
      <div className="container header">
        <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 hero-text">
                <h1>Virtual healthcare <br/> for you</h1>
                <p>Trafalgar provides progressive, and affordable <br/>healthcare, accessible on mobile and online <br />for everyone</p>
                <a href="#consult"><button className="hero-btn mt-4">Consult today</button></a>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
                <div className='header-img'>
                    <img src={HeroImg} alt="Header" />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}         

export default Hero
