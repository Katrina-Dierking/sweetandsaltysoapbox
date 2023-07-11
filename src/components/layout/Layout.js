import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import '../../assets/styles/layout.scss'
import "../../assets/styles/home.scss";

const Layout = ({children}) => {
  return (
    <layout>
      <div class="wrapper">
        <div>
          <span class="dot"></span>
        </div>
        <div>
          <span class="dot"></span>
        </div>
        <div>
          <span class="dot"></span>
        </div>
        <div>
          <span class="dot"></span>
        </div>
        <div>
          <span class="dot"></span>
        </div>
        <div>
          <span class="dot"></span>
        </div>
        <div>
          <span class="dot"></span>
        </div>
        <div>
          <span class="dot"></span>
        </div>
        <div>
          <span class="dot"></span>
        </div>
        <div>
          <span class="dot"></span>
        </div>
        <div>
          <span class="dot"></span>
        </div>
        <div>
          <span class="dot"></span>
        </div>
        <div>
          <span class="dot"></span>
        </div>
        <div>
          <span class="dot"></span>
        </div>
        <div>
          <span class="dot"></span>
        </div>
        <Header />  
        <main>{children}</main>
        <Footer />
      </div>
    </layout>
  );
}

export default Layout