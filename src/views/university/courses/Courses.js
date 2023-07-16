import React, {useState} from 'react'
import {courses} from "../../../assets/data"
import CourseInfo from './CourseInfo';
import "../../../assets/styles/courses.scss"

const Courses = () => {

  const [data] = useState(courses)
  return (
    <section className="coursesContainer">

      <section className='cardContainer'>
        {data.map((course, index) => (
          <CourseInfo props={course} key={index} />
        ))}
      </section>
    </section>
  );
}

export default Courses