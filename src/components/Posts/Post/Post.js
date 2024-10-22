import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions } from '@mui/material';

const Post = () => {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '15px',
        height: '100%',
        position: 'relative',
      }}
    >
      <CardMedia
        sx={{
          height: 0,
          paddingTop: '56.25%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          backgroundBlendMode: 'darken',
        }}
        image="https://via.placeholder.com/150" // Replace with actual image source
        title="Image Title"
      />
      <div
        sx={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          color: 'white',
        }}
      >
        <Typography variant="h6">Overlay Text</Typography>
      </div>
      <div
        sx={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          color: 'white',
        }}
      >
        <Typography variant="h6">Overlay2 Text</Typography>
      </div>
      <CardContent
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          margin: '20px',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            padding: '0 16px',
          }}
        >
          Title
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          padding: '0 16px 8px 16px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="button">Action 1</Typography>
        <Typography variant="button">Action 2</Typography>
      </CardActions>
    </Card>
  );
};

export default Post;
