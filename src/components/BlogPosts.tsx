import React from 'react'
import '../styles/newsblog.css'


interface Props{
  src: string,
  title: string
}

const BlogPosts = ({ src, title }: Props) => {
  return (
    <div className='blog_posts'>
      <div className='blog_posts_cover'>
        <img style={{ width: '100%', height: '100%' }} src={src} alt='blogs' />
      </div>
      <div className='blog_posts_title'>
        <p>{title}</p>
      </div>
    </div>
  )
}

export default BlogPosts