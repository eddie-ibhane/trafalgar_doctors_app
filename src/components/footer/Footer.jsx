import React from 'react';
import './footer.css';
import BrandLogo from '../../assets/Trafalgar.png';

const Footer = () => {
  return (
    <>
        <footer className='footer_section'>
            <div className='container'>
                <div className='footer-container'>
                    <div className='footer-trafalgar'>
                        <div className='brand-logo'>
                            <div className='logo-img'><img src={BrandLogo} alt='' /></div> 
                            <div className='logo-title'><h3>Trafalgar</h3></div>
                        </div>
                        <div className='footer-text'>
                            <p>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
                        </div>

                        <small>©Trafalgar PTY LTD 2020. All rights reserved</small>
                    </div>
                    <div className='footer-items-wrapper'>
                        <div className='footer-items footer-company'>
                            <div className='footer-item-title'>
                                <h3>Company</h3>
                            </div>
                            <div className='footer-links'>
                                <a className='footer-link' href='#about'>About</a>
                                <a className='footer-link' href='#testimonials'>Testimonials</a>
                                <a className='footer-link' href='find_doctor'>Find a doctor</a>
                                <a className='footer-link' href='apps'>Apps</a>
                            </div>
                        </div>
                        <div className='footer-items footer-region'>
                            <div className='footer-item-title'>
                                <h3>Region</h3>
                            </div>
                            <div className='footer-links'>
                                <a className='footer-link' href='#indonesia'>Indonesia</a>
                                <a className='footer-link' href='#singapore'>Singapore</a>
                                <a className='footer-link' href='hongkong'>Hongkong</a>
                                <a className='footer-link' href='canada'>Canada</a>
                            </div>
                        </div>
                        <div className='footer-items footer-help'>
                            <div className='footer-item-title'>
                                <h3>Help</h3>
                            </div>
                            <div className='footer-links'>
                                <a className='footer-link' href='#help_center'>Help center</a>
                                <a className='footer-link' href='#contact'>Contact Support</a>
                                <a className='footer-link' href='hongkong'>Instructions</a>
                                <a className='footer-link' href='how_it_works'>How it works</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer> 
    </>
  )
}

export default Footer
