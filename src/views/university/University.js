import React from 'react'
import Layout from '../../components/layout/Layout'
import {ssu} from '../../assets/images/index'
import '../../assets/styles/university.scss'


const University = () => {
  return (
    <Layout title="University">
    <main>
    <section className='uniHeader'>
      <img src={ssu} alt="sweet and salty university"></img>
        <h2>Sweet & Salty Soapbox University</h2>


        <section className='inputSec'>
        
          <input type="text" placeholder='Email'></input>
          <input type="password" placeholder='Password'></input>
          <button type="submit">Login</button>
        </section>


    
    </section>
    </main>
    </Layout>
  )
}
 
export default University