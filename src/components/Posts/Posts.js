import React from 'react';
import Post from './Post/Post.js';
import {Grid, CircularProgress} from "@mui/material"
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';

const Posts = () => {
  const posts = useSelector((state) => state.posts);

  return (
    !posts.length ? <CircularProgress /> : (
      <Grid
      container 
      alignItems='stretch'
      spacing= {2}
      >
       {posts.map((post)=> (
        <Grid key={post.id} item xs={12} sm={6}>
          <Post post={post}/>
        </Grid>
       ))} 
      </Grid>
    ),
    <>
      <Box 
        sx={{
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center', // style for actionDiv (if needed)
        }}
      >
        <h1>
          <Post />
        </h1>
      </Box>
    </>
  );

};


export default Posts;
