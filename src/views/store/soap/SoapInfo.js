import React from 'react'
import { Link } from 'react-router-dom'

const SoapInfo = ({title, cost, img, altTag, desc, purchase}) => {
  return (
    <section className="shopInfo">
      <h3>{title}</h3>
      <img src={img} alt={altTag} />
      <p>{cost}</p>
      <p>{desc}</p>
      <button>
        <Link to={purchase} target="blank">
          BUY NOW
        </Link>
      </button>
    </section>
  );
}

export default SoapInfo