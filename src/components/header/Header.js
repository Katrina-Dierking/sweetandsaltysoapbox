import React from 'react'
import {soapbox} from '../../assets/images/index'
import Nav from '../nav/Nav'
import '../../assets/styles/header.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={soapbox} alt="sweet and salty logo"></img>
      </Link>
      <Nav />
    </header>
  );
}

export default Header