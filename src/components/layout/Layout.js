import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import '../../assets/styles/layout.scss'

const Layout = ({children}) => {
  return (
    <layout>
    <Header />
 
        <main>{children}</main>
        <Footer />
    </layout>
  )
}

export default Layout