import React from 'react'
import Post from './Post/Post'
import { useSelector } from 'react-redux'

import useStyles from "./styles.js"

const Posts = () => {

  const classes = useStyles();
  const Posts = useSelector((state)=>{
    return  state.posts
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
