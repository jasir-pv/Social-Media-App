import React from 'react';
import Post from './Post/Post.js';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';

const Posts = () => {
  const posts = useSelector((state) => state.posts);

  return (
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
