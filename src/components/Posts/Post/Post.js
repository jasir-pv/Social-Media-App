import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import { ThumbUp, Delete, MoreHoriz, ThumbUpAlt, ThumbUpAltOutlined } from '@mui/icons-material';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { deletePost, likePost } from '../../../actions/posts';

const Post = ({ post, setCurrentId }) => {

  const dispatch = useDispatch()
  const user = JSON.parse(localStorage.getItem('profile'))


  const Likes  = () =>{
    if (post.likes.length > 0){
      return post.likes.find((like) => like ===(user?.result?.googleId || user?.result?._id))
        ? (
          <> <ThumbUpAlt fontSize='small' /> &nbsp;{ post.likes.length > 2 ? `You and ${post.likes.length -1 } others` : `${post.likes.length} likes${post.likes.length > 1 ? 's' :''}`} </>
        ) : (
          <> <ThumbUpAltOutlined fontSize='small' />  &nbsp; {post.likes.length} {post.likes.length ===1 ? 'Like': 'Likes'} </>
        )
    }
  }

  return (
    <Card
      sx={{
        maxWidth: 345, // You can adjust the width to fit your design
        borderRadius: '15px',
        height:"100%",
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
        
        <Typography variant="h6">{post.name}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>

              {(user?.result?.googleId === post?.creator || user?.result._id === post?.creator) &&(
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
              )}

      <CardContent>
      

        <Typography variant="h5" gutterBottom>
          {post.title}
        </Typography>

          <Typography variant="body2" color="textSecondary" component='p'>   
          {post.tags.map((tag) => `#${tag} `)}   
        </Typography>

        {/* message */}

        <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              noWrap
            >
              {post.message.length > 100
                ? `${post.message.substring(0, 100)}...`
                : post.message}
            </Typography>
      </CardContent>

      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0 16px 8px 16px',
        }}
      >
        <Button size="small" color="primary" disabled={!user?.result } onClick={() => dispatch (likePost(post._id))}>
          <Likes />
        </Button>
        {(user?.result?.googleId === post?.creator || user?.result._id === post?.creator) &&(

        
        <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
          <Delete fontSize="small" />
          Delete
        </Button>
      ) }
      </CardActions>
    </Card>
  );
};

export default Post;
