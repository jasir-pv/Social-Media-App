import React from 'react'
import Post from './Post/Post.js'
import { useSelector } from 'react-redux'

import useStyles from "./styles.js"

const Posts = () => {

  const classes = useStyles();
  const posts = useSelector((state)=>{
    return  state.posts
    console.log(posts)
  })
  return (
    <>
    <h1>
      
      <Post/>
    </h1>
    
    </>
  )
}

export default Posts
