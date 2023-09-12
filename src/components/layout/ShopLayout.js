import React from 'react'
import SecondaryNav from '../nav/SecondaryNav'
import Footer from '../footer/Footer'

const ShopLayout = ({children}) => {
  return (
    <layout>
      
        <SecondaryNav />
        <main>{children}</main>
        <Footer />
    </layout>
  )
}

export default ShopLayout