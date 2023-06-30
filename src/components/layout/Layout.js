import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import '../../assets/styles/layout.scss'

const Layout = ({title, children}) => {
  return (
    <layout>
    <Header />
    <h1>{title.toUpperCase()}</h1>
        <main>{children}</main>
        <Footer />
    </layout>
  )
}

export default Layout