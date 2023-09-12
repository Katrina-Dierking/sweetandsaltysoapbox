import React, {useState} from 'react'
import {soap} from '../../../assets/data'
import SoapCard from './SoapCard'


const Soap = () => {

  const [data] = useState(soap)
  return (
    <section className='soapBody'>
      <section className='soapContainer'>
        {data.map((item, index) => (
          <SoapCard props={item} key={index} />
        ))}
      </section>

    </section>
  )
}

export default Soap