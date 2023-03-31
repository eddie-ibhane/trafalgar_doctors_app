import React from 'react';
import './testimonial.css';
import ProfileImage from '../../assets/customer_image.png';

const Testimonial = () => {
  return (
    <>
        <div className='container' id='testimonials'>
            <div className='testimonials'>
                <div className='testimonial-title'>
                    <h2 className='content-title'>What our customer are saying</h2>
                    <div className='line'></div>
                </div>
                <div className='testimonial-body'>
                    <div className='testimonial-profile'>
                        <div className='profile-img'>
                            <img src= {ProfileImage} alt='profile' />
                        </div>
                        <div className='profile-details'>
                            <h4>Edward Newgate</h4>
                            <p>Founder Circle</p>
                        </div>
                    </div>
                    <div className='testimony'>
                        <p className='content-paragragh'>“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”</p>
                    </div>
                </div>

            </div>
        </div>  
    </>
  )
}

export default Testimonial
