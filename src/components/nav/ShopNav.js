import React from 'react'
import { useCollapse } from 'react-collapsed';
import { Link } from 'react-router-dom'

import {
  pink,
  women,
  man,
  melting,
  salt,
  bubbles,
  gift,
} from "../../assets/images/index";
import '../../assets/styles/shopNav.scss'


const ShopNav = () => {

    const {getCollapseProps, isExpanded} = useCollapse();

 
  return (
    <>
      <section className="shopNav collapsible">
        <div className="dropdown header {...getToggleProps()}">
        {isExpanded ? 'Collapse': 'Main Soap Menu'}
    

        <div {...getCollapseProps()}>
          <section className="secondary content">
            <div className="secIcon">
              <ul>
                <Link to="/desserts">
                  <img src={pink} alt="pink cupcake"></img>
                  <span className="linkOne">Dessert Soaps</span>
                </Link>
                <p>one</p>
                <p>Two</p>
              </ul>
            </div>
            <ul>
              <Link to="/salts">
                <img src={salt} alt="bath bomb"></img>
                <span className="linkTwo">Salts | Bombs | Confetti</span>
              </Link>
              <p>one</p>
              <p>Two</p>
            </ul>
            <ul>
              <Link to="/snarky">
                <img src={melting} alt="melting smiley face"></img>
                <span className="linkThree">Snarky Soaps</span>
              </Link>
              <p>one</p>
              <p>Two</p>
            </ul>
            <ul>
              <Link to="/her">
                <img src={women} alt="female profile"></img>
                <span className="linkFour">Soap for Her</span>
              </Link>
              <p>one</p>
              <p>Two</p>
            </ul>
            <ul>
              <Link to="/him">
                <img src={man} alt="man with beard"></img>
                <span className="linkFive">Soaps for Him</span>
              </Link>
              <p>one</p>
              <p>Two</p>
            </ul>
            <ul>
              <Link to="/bubble">
                <img src={bubbles} alt="green soap bubbles"></img>
                <span className="linkSix">Bubble Bath</span>
              </Link>
              <p>one</p>
              <p>Two</p>
            </ul>
            <ul>
              <Link to="/gifts">
                <img src={gift} alt="purple gift box"></img>
                <span className="linkSeven">Gift Boxes</span>
              </Link>
              <p>one</p>
              <p>Two</p>
            </ul>
            </section>
            </div>
            </div>
        <div className="dropdown">
          <p>Soap Dough</p>
          <div className='dropdown-content two'>
          
          <p>One</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default ShopNav