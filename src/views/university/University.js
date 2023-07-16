import React from 'react'
import {qbu} from '../../assets/images/index'
import '../../assets/styles/university.scss'

import Footer from '../../components/footer/Footer'
// import Login from '../../components/loginReg/Login'
import Reg from '../../components/loginReg/Reg'



const University = () => {
  return (
    <section className="universityContainer">
      <section className="uniHeader">
        <img src={qbu} alt="queen bean design university"></img>
        <h2>Queen Bean Design University</h2>
      </section>

      <Reg />
      <hr></hr>

      <Footer />
    </section>
  );
}
 
export default University