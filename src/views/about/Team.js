import React from 'react'

const Team = ({name, img, title, sub, about}) => {
  return (
    <section className='team'>
        <h4>{name}</h4>
        <img src ={img} alt="team member" />
        <h4>{title}</h4>
        <h5>{sub}</h5>
        <p>{about}.</p>
    </section>
  )
}

export default Team