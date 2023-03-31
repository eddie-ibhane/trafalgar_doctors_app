import React from 'react';
import './services.css';
import Service from '../../components/service/Service';
import Search from '../../assets/search_icon.png';
import Pharmacy from '../../assets/online_pharmacy.png';
import Consultation from '../../assets/consultation.png';
import DetailsInfo from '../../assets/details_info.png';
import EmergencyCare from '../../assets/emergency_care.png';
import Trackings from '../../assets/trackings.png';
import Button from '../../components/button/Button';



const Services = () => {
  return (
    <>
        <div className='services-section' id='doctor'>
            <div className=''>
                <div className='services-content container'>
                    <h1 className='content-title'>Our Services</h1>
                    <div className='line'></div>
                    <p className='content-paragragh'>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
                </div>
                <div className='services-container-bg'>
                    <div className='services-container container'>
                        <Service image={Search} title="Search doctor" text="Choose your doctor from thousands of specialist, general, and trusted hospitals" />
                        <Service image={Pharmacy} title="Online pharmacy" text="Buy  your medicines with our mobile application with a simple delivery system" />
                        <Service image={Consultation} title="Consultation" text="Free consultation with our trusted doctors and get the best recomendations" />
                        <Service image={DetailsInfo} title="Details info" text="Free consultation with our trusted doctors and get the best recomendations" />
                        <Service image={EmergencyCare} title="Emergency care" text="You can get 24/7 urgent care for yourself or your children and your lovely family" />
                        <Service image={Trackings} title="Trackings" text="Track and save your medical history and health data " />
                    </div>
                </div>
                <div className='services-cta-btn'>
                    <Button text="Learn more"/>
                </div>
            </div>
            
        </div>
    </>
  )
}
export default Services
