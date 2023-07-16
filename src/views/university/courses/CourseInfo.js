import React from 'react'
import CourseCard from './CourseCard'

const CourseInfo = ({props}) => {
  return (
   <CourseCard 
    title={props.title.toUpperCase()}
    img={props.img}
    cost={props.cost}
   />
  )
}

export default CourseInfo