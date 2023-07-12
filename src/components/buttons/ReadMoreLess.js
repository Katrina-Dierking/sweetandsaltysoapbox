import React, {useState} from 'react'
import '../../assets/styles/blog.scss'

const ReadMoreLess = ({shortContent, longContent}) => {

    const [collapse, setCollapse] = useState(false)
  return (
   <section className='readMoreContent'>
     {shortContent}
        <span className={`long-text ${collapse ? "expanded" : ""}`}>
     {longContent}
        </span>
        <button 
            onClick = {() => setCollapse((prev)=> !prev)}>
            {`${collapse ? "Read Less" : "Read More"}`}
        </button>
   </section>
  )
}

export default ReadMoreLess
