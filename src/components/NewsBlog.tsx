import React from 'react'
import '../styles/newsblog.css'
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { BlogPost } from '../models';
import BlogPosts from './BlogPosts';

const NewsBlog = () => {

  const blogPosts: BlogPost[] = [
    {
      src: 'assets/aws.png',
      title: 'New Batch starts on 21, june'
    },
    {
      src: 'assets/node.png',
      title: 'Node Js crash course starts on 31, july'
    },
    {
      src: 'assets/react.png',
      title: 'React Js crash course starts on 31, july'
    },
  ]

  return (
    <div className='news_blog'>
        <div>
            <p className='news_blog_title'>News & Blog</p>
            <p className='news_blog_caption'>Stay Informed, Stay Inspired: Discover Our Latest Blog Posts</p>
        </div>
        <div className='news_blog_arrows'>
            <ArrowBackIosNewRoundedIcon className='news_blog_arrow' style={{ fontSize: '0.75rem' }} />
            <ArrowForwardIosRoundedIcon className='news_blog_arrow' style={{ fontSize: '0.75rem' }} />
        </div>
        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-evenly' }}>
          {blogPosts.map((blogPost) => {
            return <BlogPosts src={blogPost.src} title={blogPost.title} />
          })}
        </div>
    </div>
  )
}

export default NewsBlog