import React from 'react';
import './service.css';

const Service = ({image, title, text}) => {
  return (
    <>
      <div className='service'>
        <div className='service-image'>
            <img src= {image} alt='' />
        </div>
        <div className='service-title'>
            <h2>{title}</h2>
        </div>
        <div className='service-text'>
            <p>{text}</p>
        </div>
      </div>
    </>
  )
}

export default Service
