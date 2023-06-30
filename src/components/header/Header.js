import React from 'react'
import logo from '../../assets/images/logo.png'
import Nav from '../nav/Nav'
import '../../assets/styles/header.scss'

const Header = () => {
  return (
    <header>
        <img src={logo} alt="sweet and salty logo"></img>
        <Nav />
    </header>


  )
}

export default Header