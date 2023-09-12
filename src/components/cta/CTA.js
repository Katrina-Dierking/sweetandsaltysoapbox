import React from 'react'
import {soap} from '../../assets/images/index'
import '../../assets/styles/cta.scss'

const CTA = () => {
  return (
    <section className='callToAction'>
        <section className='ctaCont'>
        <section className='leftCta'>
            <img src={soap} alt="bar of soap"></img>
            <p>News, Events, + Discounts</p>
        </section>
        <form className='ctaForm'>
            <input 
                type="text"
                placeholder="First name"
               
            />
            <input 
                type="text"
                placeholder="Email address"
               
            />
            <button className="ctaButton">Yes! I want it!</button>
        </form>
        </section>
        
    </section>
  )
}

export default CTA