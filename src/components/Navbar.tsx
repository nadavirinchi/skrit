import React from 'react'
import '../styles/navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo'>
            <img src='/assets/logo.svg' alt='logo' />
            <p>SKR IT Techno Solutions</p>
        </div>
        <div className='parts'>
            <p>Home</p>
            <p>Recruiters</p>
            <p>About Us</p>
            <p>Contact</p>
        </div>
    </div>
  )
}

export default Navbar