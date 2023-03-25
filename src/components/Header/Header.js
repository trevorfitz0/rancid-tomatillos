import './Header.css'
import userIcon from '../../images/user-icon.png'

import React from 'react'

function Header() {
  return (
    <header>
        <h1 className="logo" >RANCID TOMATILLOS</h1>
        <img className="user-icon" alt="user-icon" src={userIcon}/>
    </header>
  )
}

export default Header