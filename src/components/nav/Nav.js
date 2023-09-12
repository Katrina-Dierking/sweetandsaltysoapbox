import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/styles/nav.scss'

const Nav = () => {
  return (
    <nav>
      <Link to="https://sssblog.queenbeandesigncafe.com/">Blog</Link>
      <Link to="/store">Shop</Link>
      <Link to="/university">Learn</Link>
    </nav>
  );
}

export default Nav