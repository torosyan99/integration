import React from 'react'
import Navigation from './Navigation'

import './Footer.css'
import Socials from './Socials'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="container">
            <Navigation />
            <Socials />
            <p className='footer__copyright'>2025 &copy; ИНТЕГРАЦИЯ судьбы</p>
        </div>
    </footer>
  )
}

export default Footer