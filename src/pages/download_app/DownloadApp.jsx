import React from 'react';
import './download_app.css';
import Download from '../../assets/download_app.png';
// import Button from '../../components/button/Button';

const DownloadApp = () => {
  return (
    <>
      <div className='container'>
        <div className='download_app' id='apps'>
            
            <div className='download-text-wrapper'>
                <div className='title'>
                    <h3 className='content-title'>Download our mobile apps</h3>
                </div>
                <div className='line'></div>
                <div className='text'>
                    <p className='content-paragragh'>Our dedicated patient engagement app and web portal allow you to access information instantaneously (no edeous form, long calls, or administrative hassle) and securely</p>
                </div>
                <div className='download_app-cta-btn'>
                    {/* <Button text= "Download " /> */}
                    <button className='btn'>Download <i className="ml-2 fa fa-solid fa-arrow-down"></i></button>
                </div>
            </div>
            <div className='download-image-wrapper'>
                <img src={Download} alt="Download App" />
            </div>
        </div>
      </div>
    </>
  )
}
export default DownloadApp
