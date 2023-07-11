import React from 'react'
import '../../assets/styles/footer.scss'
import BottomNav from '../nav/BottomNav'
import {
  facebook, 
  twitter, 
  pinterest, 
  youtube
} from '../../assets/images/index'

const Footer = () => {
  return (
    <footer>
      <hr></hr>
      <BottomNav />
      <p> ©2023 Sweet and Salty Soap Box | All Rights Reserved</p>
      <p>Powered by Queen Bean Design Cafe</p>
      <br></br>
      <section className="socialIcons">
        <img src={facebook} alt="facebook icon"></img>
        <img src={twitter} alt="twitter icon"></img>
        <img src={pinterest} alt="pinterest icon"></img>
        <img src={youtube} alt="youtube icon"></img>
      </section>
    </footer>
  );
}

export default Footer