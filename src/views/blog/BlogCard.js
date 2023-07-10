import React from 'react'
import BlogInfo from './BlogInfo'

const BlogCard = ({props}) => {
  return (
   
     <BlogInfo
        title={props.title}
        body={props.body}
     />
   
  )
}

export default BlogCard