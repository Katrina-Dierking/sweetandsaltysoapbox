import React from 'react'
import {ssu} from '../../assets/images/index'
import '../../assets/styles/university.scss'
import Login from '../../components/loginReg/Register'
import Footer from '../../components/footer/Footer'


const University = () => {
  return (
    <section className='universityContainer'>
      
      <section className="uniHeader">
        <img src={ssu} alt="sweet and salty university"></img>
        <h2>Sweet & Salty Soapbox University</h2>
      </section>
      <Login />
      <Footer />
    </section>
  );
}
 
export default University