import React from 'react'
import '../../assets/styles/footer.scss'
import BottomNav from '../nav/BottomNav'
import {
  facebook, 
  twitter, 
  pinterest, 
  youtube
} from '../../assets/images/index'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <hr></hr>
      <BottomNav />
      <p> ©2023 Sweet and Salty Soap Box | All Rights Reserved</p>
      <p>Powered by Queen Bean Design Cafe</p>
      <br></br>
      <section className="socialIcons">
        <Link to="https://www.facebook.com/sweetandsaltysoapbox.com" target="blank">
          <img src={facebook} alt="facebook icon"></img>
        </Link>
        <img src={twitter} alt="twitter icon"></img>
        <Link to="https://www.pinterest.com/sweetandsaltysoapbox" target="blank">
          <img src={pinterest} alt="pinterest icon"></img>
        </Link>
        <Link to="https://www.youtube.com/@sweetandsaltysoapbox" target="blank">
          <img src={youtube} alt="youtube icon"></img>
        </Link>

      </section>
    </footer>
  );
}

export default Footer