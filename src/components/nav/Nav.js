import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/styles/nav.scss'

const Nav = () => {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <a href="https://sssblog.queenbeandesigncafe.com" target="blank">Blog</a>
        <Link to="/store">Store</Link>
        <Link to="/university">University</Link>
        <Link to="/contact">Contact</Link>
    </nav>
  )
}

export default Nav