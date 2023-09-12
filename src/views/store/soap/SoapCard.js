import React from 'react'
import SoapInfo from './SoapInfo'

const SoapCard = ({props}) => {
  return (
    <SoapInfo 
        title={props.title}
        img={props.img}
        cost={props.cost}
        desc={props.desc}
        purchase={props.purchase}
        
    />
  )
}

export default SoapCard