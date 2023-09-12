import React from 'react'
import { Link } from 'react-router-dom'
import "../../assets/styles/nav.scss";


const BottomNav = () => {
  return (
    <section className="bottomNav">
      <Link to="/">Home</Link>
      <Link to="https://sssblog.queenbeandesigncafe.com/">Blog</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </section>
  );
}

export default BottomNav