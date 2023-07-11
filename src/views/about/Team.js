import React from 'react'

const Team = ({name, title, about}) => {
  return (
    <section className='team'>
        <h4>{name}</h4>
        <h5>{title}</h5>
        <p>{about}.</p>
    </section>
  )
}

export default Team