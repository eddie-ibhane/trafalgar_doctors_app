import React from 'react'
import Button from '../../components/button/Button'
import Healthcare from '../../assets/healthcare_provider.png'
import './healthcare_provider.css'

const HealthcareProvider = () => {
  return (
    <>
      <div className='container' id='about'>
        <div className='healthcare_provider'>
            <div className='image-wrapper'>
                <img src={Healthcare} alt="Healthcare provider" />
            </div>
            <div className='text-wrapper'>
                <div className='title'>
                    <h3 className='content-title'>Leading healthcare providers</h3>
                </div>
                <div className='line'></div>
                <div className='text'>
                    <p className='content-paragragh'>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver</p>
                </div>
                <div className='healthcare_provider-cta-btn'>
                    <Button text="Learn more" />
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default HealthcareProvider
