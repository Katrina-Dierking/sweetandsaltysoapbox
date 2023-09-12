import React from 'react'
import { Link } from 'react-router-dom'

import {
    shopSoapbox
} from '../../assets/images/index'
import '../../assets/styles/shop.scss'


const SecondaryNav = () => {
  return (
    <section className="shop">
      
      <img src={shopSoapbox} alt="sweet and salty logo"></img>
      <div className="secondary">
        <div className="secIcon"></div>
        <Link to="/soap">
  
          <scan className="linkOne">Soap</scan>
        </Link>
        <Link to="/bathproducts">
          
          <scan className="linkTwo">Bath Products</scan>
        </Link>

        <Link to="/embeds">
          <scan className="linkThree"> Soap Embeds</scan>
        </Link>

        <Link to="/gifts">
        
          <span className="linkFour">Gift Boxes</span>
        </Link>
      </div>
    </section>
  );
      }
    
      export default SecondaryNav
      // <Link to="/her">
      //   <img src={women} alt="female profile"></img>
      //   <span className="linkFour">Soap for Her</span>
      // </Link>
      // <Link to="/him">
      // <img src={man} alt="man with beard"></img>
      // <span className="linkFive">Soap for Him</span>
      // </Link>
      
      // <Link to="/snarky">
      // <img src={melting} alt="melting smiley face"></img>
      // <span className="linkThree">Snarky Soaps</span>
      // </Link>
      // <Link to="/bubble">
      // <img src={bubbles} alt="green soap bubbles"></img>
      // <span className="linkSix">Bubble Bath</span>
      // </Link>
      // <Link to="/gifts">
      // <img src={gift} alt="purple gift box"></img>
      // <span className="linkSeven">Gift Boxes</span>
      // </Link>