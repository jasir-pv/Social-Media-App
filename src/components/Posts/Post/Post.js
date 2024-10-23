import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import moment from "moment"
import {
  Delete,
  MoreHoriz,
  ThumbUp,

} from "@mui/icons-material";


const Post = ({post, setCurrentId}) => {
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
        image={post.selectedFile} // Replace with actual image source
        title={post.title}
      />
      <div
        sx={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          color: 'white',
        }}
      >
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>

      </div>
      <div

        sx={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          color: 'white',
        }}
     
      >
      <Button style={{color:'white'}} size='small' onClick={()=>{}}>
        <MoreHoriz fontSize="default"/>
      </Button>
      </div>
      <div>
      <Typography
          variant="body2"
          color="textSecondary"
          sx={{
            padding: '0 16px',
          }}
        >
          {post.tags.map((tag=> `#${tag} `))}
        </Typography>
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
          gutterBottom
          sx={{
            padding: '0 16px',
          }}
        >
          {post.message}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          padding: '0 16px 8px 16px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Button size='small' color='primary' onClick={()=>{}}>
            <ThumbUp fontSize='small'/>
            Like
            {post.likeCount}
        </Button>
        <Button size='small' color='primary' onClick={()=>{}}>
            <Delete fontSize='small'/>
            Delete
           
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
