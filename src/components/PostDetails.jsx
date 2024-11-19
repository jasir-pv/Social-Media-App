import React, { useEffect } from 'react'
import { Box, Paper, Typography, CircularProgress, Divider } from '@mui/material'
import { useDispatch,useSelector } from 'react-redux'
import moment from 'moment'
import { useParams,useNavigate } from 'react-router-dom'
import { getPost } from '../actions/posts'
import CommentSection from './CommentSection'


const PostDetails = () => {



  const { post, isLoading } = useSelector((state) => state.posts);
  console.log(post)
 const dispatch = useDispatch()
 const navigate = useNavigate()


 const {id} = useParams()

 useEffect(()=>{
    dispatch(getPost(id))
 },[id])

 if(!post) return  null;
 if (!post) return null;
 if (isLoading) {
   return (
     <Paper
       elevation={6}
       sx={{
         display: "flex",
         justifyContent: "center",
         alignItems: "center",
         padding: "20px",
         borderRadius: "15px",
         height: "39vh",
       }}
     >
       <CircularProgress size="7rem" />
     </Paper>
   );
 }
  
  return (
    <Box
      display="flex"
      flexDirection={{ xs: 'column', sm: 'row' }}
      sx={{ width: '100%' }}
    >
      <Box
        sx={{
          flex: 1,
          borderRadius: '20px',
          margin: '10px',
        }}
      >
        <Typography variant="h3" component="h2">
          {post.title}
        </Typography>
        <Typography
          gutterBottom
          variant="h6"
          color="textSecondary"
          component="h2"
        >
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
        <Typography gutterBottom variant="body1" component="p">
          {post.message}
        </Typography>
        <Typography variant="h6">Created by: {post.name}</Typography>
        <Typography variant="body1">
          {moment(post.createdAt).fromNow()}
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="body1">
          <strong>Realtime Chat - coming soon!</strong>
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="body1">
         <CommentSection post={post}/>
        </Typography>
        <Divider sx={{ my: 2 }} />
      </Box>
      <Box
        sx={{
          marginLeft: { sm: '20px', xs: '0' },
          borderRadius: '20px',
          width: '100%',
          flex: '1',
        }}
      >
        <img
          style={{
            borderRadius: '20px',
            objectFit: 'cover',
            width: '100%',
            maxHeight: '600px',
          }}
          src={
            post.selectedFile ||
            'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'
          }
          alt={post.title}
        />
      </Box>
    </Box>
  )
}

export default PostDetails
