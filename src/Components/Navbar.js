import React from 'react';
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar_contents'>
            <h2 id="home">HOME</h2>
            <h2 id="settings">SETTINGS</h2>
            <h2 id="about">ABOUT</h2>
        </div>
    </div>
  )
}

export default Navbar