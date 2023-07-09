import React from 'react'
import Layout from '../../components/layout/Layout'
import '../../assets/styles/about.scss'


const About = () => {
  return (
   <Layout >
   <section className="about">
      <h3>About Queen Bean Design Cafe</h3>
      <section className='box aboutTop'>
        <h4>Meet the Team</h4>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas libero exercitationem alias eligendi fugit? Quisquam ratione necessitatibus perspiciatis ipsa officiis rem! Esse, enim accusamus? Minima quasi nostrum corporis quibusdam dicta.</p>
      </section>
      <section className='box aboutMiddle'>
        <h4>Selena's Chance</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio corrupti, porro laudantium perferendis quae esse id dicta aliquid necessitatibus dolor. Nihil, numquam asperiores iusto doloribus commodi atque necessitatibus itaque ut!</p>
      </section>
      <section className='box aboutBottom'>
        <h4>Three:One</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quisquam repellat, nulla iure aperiam recusandae aut natus! Ducimus modi consectetur eligendi similique totam unde, obcaecati culpa! Facilis autem illo amet.</p>
      </section>
   </section>
      </Layout>
    
  )
}

export default About