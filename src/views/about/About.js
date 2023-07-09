import React from 'react'
import Layout from '../../components/layout/Layout'
import '../../assets/styles/about.scss'


const About = () => {
  return (
   <Layout >
   <section className="about">
      <h3>About Queen Bean Design Cafe</h3>
      <section className='box aboutTop'><h4>Meet the team</h4></section>
      <section className='box aboutMiddle'><h4>Selena's Hope</h4></section>
      <section className='box aboutBottom'><h4>Three For One</h4></section>
   </section>
      </Layout>
    
  )
}

export default About