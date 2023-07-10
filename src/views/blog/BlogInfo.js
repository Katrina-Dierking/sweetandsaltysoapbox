import React from 'react'

const BlogInfo = ({title, body}) => {
  return (
    <section className = "blog">
        <h3>{title}</h3>
        <p>{body}</p>
    </section>
  )
}

export default BlogInfo