import React from 'react'
import {ssu} from '../../assets/images/index'
import '../../assets/styles/university.scss'

import Footer from '../../components/footer/Footer'
import Login from '../../components/loginReg/Login'
import Reg from '../../components/loginReg/Reg'



const University = () => {
  return (
    <section className='universityContainer'>
      
      <section className="uniHeader">
        <img src={ssu} alt="sweet and salty university"></img>
        <h2>Sweet & Salty Soapbox University</h2>
      </section>
      <Reg />
      <hr></hr>


      <Footer />
    </section>
  );
}
 
export default University