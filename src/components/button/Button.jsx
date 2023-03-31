import React from 'react';
import './button.css';

const Button = ({text}) => {
  return (
    <>
      <div className='primary-btn'>
        <button className='btn'>{text}</button>
      </div>
    </>
  )
}

export default Button
