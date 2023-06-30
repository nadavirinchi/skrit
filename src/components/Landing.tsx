import React from 'react'
import '../styles/landing.css'
import Navbar from './Navbar'
import LandingBody from './LandingBody'
import Hiring from './Hiring'
import Counts from './Counts'

const Landing = () => {
  return (
    <div className='landing'>
      <Navbar />
      <LandingBody />
      <Hiring />
      <Counts />
    </div>
  )
}

export default Landing