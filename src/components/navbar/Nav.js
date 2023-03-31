import React from 'react'
import Logo from '../../assets/logo.png'
import './nav.css'

const Nav = () => {
  return (
    <div>
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="#home"><img src={Logo} className="app-logo" alt="logo" /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <a className="nav-link home" href="#home">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#doctor">Find a doctor</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#apps">Apps</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#testimonials">Testimonials</a>
                </li>
                <li className="nav-item ">
                    <a className="nav-link" href="#about">About us</a>
                </li>
                </ul>
                
            </div>
        </nav>
        </div>
    </div>
  )
}

export default Nav
