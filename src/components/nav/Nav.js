import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/styles/nav.scss'

const Nav = () => {
  return (
    <nav>
     
        <a href="https://sssblog.queenbeandesigncafe.com" target="blank">Blog</a>
        <Link to="/store">Shop</Link>
        <Link to="/university">Learn</Link>
    </nav>
  )
}

export default Nav