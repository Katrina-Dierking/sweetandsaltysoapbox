import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import CTA from '../cta/CTA'
import '../../assets/styles/layout.scss'
import "../../assets/styles/home.scss";

const Layout = ({children}) => {
  return (
    <layout>
      <div className="wrapper">
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>        
  
        <Header />  
        <main>{children}</main>
        <Footer />
     
      </div>
    </layout>
  );
}

export default Layout