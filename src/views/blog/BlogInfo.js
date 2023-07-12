import React from 'react'
import ReadMoreLess from '../../components/buttons/ReadMoreLess'

const BlogInfo = ({title, bodyIntro, body}) => {
  return (
    <section className = "blog">
        <h3>{title}</h3>
    
        <ReadMoreLess 
          shortContent={bodyIntro}
          longContent={body}
          />
    </section>
  )
}

export default BlogInfo