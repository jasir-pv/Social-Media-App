import React, { useState, useEffect} from 'react';
import FileBase from "react-filebase64"
import { TextField, Button, Paper, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { createPost,updatePost } from '../../actions/posts';


const Form = ({currentId,setCurrentId}) => {

  const dispatch = useDispatch()
  const user = JSON.parse(localStorage.getItem('profile'))
  const post = useSelector((state) => 
    currentId && Array.isArray(state.posts)
      ? state.posts.find((p) => p._id === currentId)
      : null
  );
      const [postData, setPostData] = useState({
      title: "",
      message: "", 
      tags:[""], 
      selectedFile:"",
    })

    useEffect(()=>{
        if (post) setPostData(post)
    },[post])


    const handleSubmit = async (e) =>{
       e.preventDefault()

       if(!currentId){
        dispatch(createPost({ ...postData,name: user?.result.name}))
        
       }else{
         dispatch(updatePost(currentId, {...postData, name: user?.result.name}))
        
        } clear()
    }

    const clear = ()=>{
          setCurrentId(null)
          setPostData({ 
      title: "",
      message: "", 
      tags:[""], 
      selectedFile:"",
})
    }

    if(!user?.result?.name){
      return(
        <Paper sx={{padding: 2}} >
          <Typography varirant='h6' align= 'center'>
                      Please sign into create your own memories and like other's memories.
          </Typography>
        </Paper>
      )
    }


  return (
    <Paper
      sx={{
        padding: 2, // This replaces `theme.spacing(2)` from your previous styles
      }}
    >
      <form
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}

        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
      <Typography variant='h6' >{currentId ? `Editing "${post.title}"` : 'Creating a Memory'}</Typography>

        <TextField
          name="title"
          variant="outlined"
          label="Title"
          value={postData.title}
          onChange={(e) => setPostData({ ...postData,title:e.target.value})}
          fullWidth
          sx={{ margin: 1 }} // This replaces `theme.spacing(1)`
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          multiline
          value={postData.message}
            onChange={(e) =>
              setPostData({ ...postData, message: e.target.value })
            }
          rows={4}
          sx={{ margin: 1 }} // This replaces `theme.spacing(1)`
        />
          <TextField
            name="tags"
            variant="outlined"
            label="Tags"
            sx={{ marginBottom: 2 }}
            fullWidth
            value={postData.tags}
            onChange={(e) =>
              setPostData({ ...postData, tags: e.target.value.split(",") })
            }
          />
        {/* <div
          sx={{
            width: '97%',
            margin: '10px 0', // Similar to your fileInput styling
          }}
        >
          <input type="file" />
        </div> */}
  
        <div>
              <FileBase
                type= "file"
                multiple={false}
                onDone={( {base64})=> setPostData({...postData,selectedFile:base64})}
                sx={{
                   width: '97%',                 
                   margin: '20px 0', // Similar to your fileInput styling
          }}
              />

        </div>
         <Button
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
          sx={{ marginBottom: 2,marginTop:2 }} // Replaces `theme.spacing(1)` from `buttonSubmit`
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
          sx={{ marginBottom: 2 }} // Replaces `theme.spacing(1)` from `buttonSubmit`
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
