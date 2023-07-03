import React from 'react'
import '../styles/landing.css'
import Navbar from './Navbar'
import LandingBody from './LandingBody'
import Hiring from './Hiring'
import Counts from './Counts'
import TopRecruiters from './TopRecruiters'
import OurServices from './OurServices'
import NewsBlog from './NewsBlog'
import Feedback from './Feedback'
import ContactUs from './ContactUs'

const Landing = () => {
  return (
    <div className='landing'>
      <Navbar />
      <LandingBody />
      <Hiring />
      <Counts />
      <TopRecruiters />
      <OurServices />
      <NewsBlog />
      <Feedback />
      <ContactUs />
    </div>
  )
}

export default Landing