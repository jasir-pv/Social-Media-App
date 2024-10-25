import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import { ThumbUp, Delete, MoreHoriz } from '@mui/icons-material';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { deletePost, likePost } from '../../../actions/posts';

const Post = ({ post, setCurrentId }) => {

  const dispatch = useDispatch()
  return (
    <Card
      sx={{
        maxWidth: 345, // You can adjust the width to fit your design
        borderRadius: '15px',
        height:400,
        marginBottom: '20px',
        position: 'relative',
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.2)',
      }}
    >
      <CardMedia
        sx={{
          height: 0,
          paddingTop: '56.25%', // 16:9 ratio
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          backgroundBlendMode: 'darken',
        }}
        image={post.selectedFile || 'https://via.placeholder.com/150'}
        title={post.title}
      />
      
      <div
        style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          color: 'white',
        }}
      >
        
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>

      <div
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          color: 'white',
        }}
      >
        <Button style={{ color: 'white' }} 
        size="small"
         onClick={() => setCurrentId(post._id)}>
          <MoreHoriz fontSize="default" />
        </Button>
      </div>

      <CardContent>
        <Typography variant="body2" color="textSecondary"> 
          {post.tags.map((tag) => `#${tag} `)}   
        </Typography>

        <Typography variant="h5" gutterBottom>
          {post.title}
        </Typography>

        {/* message */}

        <Typography variant="body2" color='textSecondary' component="p" >
          {post.message}
        </Typography>
      </CardContent>

      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0 16px 8px 16px',
        }}
      >
        <Button size="small" color="primary" onClick={() => dispatch (likePost(post._id))}>
          <ThumbUp fontSize="small" />
        Like {post.likeCount}
        </Button>
        <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
          <Delete fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
