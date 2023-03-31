import React from 'react'
import Footer from './components/footer/Footer'
import Nav from './components/navbar/Nav'
import Articles from './pages/articles/Articles'
import DownloadApp from './pages/download_app/DownloadApp'
import HealthcareProvider from './pages/healthcare_provider/HealthcareProvider'
import Hero from './pages/hero/Hero'
import Services from './pages/services/Services'
import Testimonial from './pages/testimonials/Testimonial'

const View = () => {
  return (
    <div>
        <Nav />
        <Hero />
        <Services/>
        <HealthcareProvider/>
        <DownloadApp/>
        <Testimonial/>
        <Articles/>
        <Footer/>
    </div>
  )
}

export default View
