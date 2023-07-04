import React from 'react'
import '../styles/ourservices.css'
import { Service } from '../models'
import Services from './Services'

const OurServices = () => {

    const services: Service[] = [
        {
            src: 'assets/staffing.png',
            service: 'Staffing',
            delay: 0.25
        },
        {
            src: 'assets/consulting.png',
            service: 'Consulting',
            delay: 0.45
        },
        {
            src: 'assets/development.png',
            service: 'Development',
            delay: 0.55
        },
        {
            src: 'assets/engineering.png',
            service: 'Engineering',
            delay: 0.65
        },
        {
            src: 'assets/testing.png',
            service: 'Testing',
            delay: 0.75
        },
        {
            src: 'assets/design.png',
            service: 'Design',
            delay: 0.85
        }
    ]

  return (
    <div className='our_services'>
        <div>
            <p className='our_services_title'>Our Services</p>
            <p className='our_services_caption'>Navigating the Talent Landscape: Rely on Our Expert Staffing Services</p>
        </div>
        <div className='our_service_services'>
            {services.map((service) => {
                return <Services src={service.src} service={service.service} delay={service.delay} />
            })}
        </div>
    </div>
  )
}

export default OurServices