import React, {useState} from 'react'
import {posts} from "../../assets/data"
import Layout from '../../components/layout/Layout'
import "../../assets/styles/blog.scss"
import BlogCard from './BlogCard'


const Blog = () => {

    const [data] = useState(posts)
  return (
    <Layout>
      <section className="blogBody">
        <section className="blogContainer">
            {data.map((post, index) => (
                <BlogCard props={post} key={index} />
            ))}
         
        </section>
        <aside>
        <h5>Previous posts:</h5>
        </aside>
      </section>
    </Layout>
      );
    }
    
    export default Blog
    
    