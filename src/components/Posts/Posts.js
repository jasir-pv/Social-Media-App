

import React from 'react';
import Post from './Post/Post.js';
import { Grid, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';
import { styled } from '@mui/system';  // Import styled from MUI system

// Define styled components
const StyledGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
}));


const Posts = ({ setCurrentId}) => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);

  return (
    !posts.length ? <CircularProgress /> : (
      <StyledGrid
        container
        spacing={2}
      >
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6}>
            <Post post={post} setCurrentId={setCurrentId}/>
          </Grid>
        ))}
      </StyledGrid>
    )
  );
};

export default Posts;
