import React from 'react'

const CourseCard = ({title, img, cost}) => {
  return (
    <section className='courseCard'>
        <h4>{title}</h4>
        <img src={img}  alt="course"/>
        <p>{cost}</p>
        <button className="buyCourse">Purchase</button>

    </section>
  )
}

export default CourseCard