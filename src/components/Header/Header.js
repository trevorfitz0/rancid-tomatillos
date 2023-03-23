import './Header.css'
import userIcon from '../../images/user-icon.png'

import React from 'react'

function Header() {
  return (
    <header>
        <h1 class="logo" >Rancid Tomatillos</h1>
        <img class="user-icon" alt="user-icon" src={userIcon}/>
    </header>
  )
}

export default Header