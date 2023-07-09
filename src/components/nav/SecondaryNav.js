import React from 'react'
import { Link } from 'react-router-dom'
import {
    pink,
    women, 
    man, 
    melting, 
    salt,
    bubbles
} from '../../assets/images/index'

const SecondaryNav = () => {
  return (
    <div className="secondary">
      <div className="secIcon">
        <Link to="/sweets">
          <img src={pink} alt="pink cupcake"></img>
          <span className="linkOne">Dessert Soaps</span>
        </Link>
      </div>
      <Link to="/salts">
        <img src={salt} alt="bath bomb"></img>
        <span className="linkTwo">Bath Salts & Bombs</span>
      </Link>
      <Link to="/snarky">
        <img src={melting} alt="melting smiley face"></img>
        <span className="linkThree">Snarky Soaps</span>
      </Link>
      <Link to="/her">
        <img src={women} alt="female profile"></img>
        <span className="linkFour">Soap for Her</span>
      </Link>
      <Link to="/his">
        <img src={man} alt="man with beard"></img>
        <span className="linkFive">Soaps for Him</span>
      </Link>
      <Link to="/bubbles">
        <img src={bubbles} alt="green soap bubbles"></img>
        <span className="linkSix">Bubble Bath</span>
      </Link>
    </div>
  );
}

export default SecondaryNav