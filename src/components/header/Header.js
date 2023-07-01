import React from 'react'
import logo from '../../assets/images/logo.png'
import Nav from '../nav/Nav'
import '../../assets/styles/header.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="sweet and salty logo"></img>
      </Link>
      <Nav />
    </header>
  );
}

export default Header