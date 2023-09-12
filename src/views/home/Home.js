import React from 'react'
import Layout from '../../components/layout/Layout'
import '../../assets/styles/home.scss'


const Home = () => {
  return (
    <Layout title="Home">
  
    <section className='homebody'>

      <section className='homebodyTop'>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem at perspiciatis libero, velit ab fugiat reiciendis sed tenetur deleniti quibusdam voluptatem provident! Vero, nam at distinctio pariatur odit fugit mollitia.</p>
      </section>

      <section className='homebodyMid'>
      
      <p>Unique homemade soap and bath products. </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        aliquam, magni dolores blanditiis id ab vitae voluptatibus eius fuga
        nobis laboriosam neque, minima quam doloremque ut voluptas ex omnis quo?
      </p>
      </section>

      <section className='homebodyAd'><p>Purchase a Journal</p></section>

      <section className='homebodyBottom'>
        <section className="gallery">
          <h3>Gallery</h3>
          <section className = "image-gallery">
            <img id="current-image" src="images/image2.jpg" alt="soap 1" />
          </section>
        </section>
      </section>

    </section>
      
    
    </Layout>
  );
}

export default Home
