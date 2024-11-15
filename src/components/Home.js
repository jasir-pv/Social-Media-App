import React, { useEffect, useState } from 'react';
import { Container, Grid, Grow, Paper } from '@mui/material';
import Posts from './Posts/Posts';
import Form from './Form/Form';
import { useDispatch } from 'react-redux';
import { getPosts } from '../actions/posts';
import Paginate from './Pagination';




const Home = () =>{
const dispatch = useDispatch();
const [ currentId, setCurrentId] = useState(null)

// Fetch posts on component mount
useEffect(() => {
  dispatch(getPosts());
}, [currentId,dispatch]);


return(
<Grow in>
        <Container maxWidth='xl'>
          <Grid container justifyContent="space-between" alignItems="stretch"  spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts currentId ={currentId} setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={5}>
              <Form currentId ={currentId} setCurrentId={setCurrentId}/>
              <Paper elevation={6}>
                    <Paginate/>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Grow>

)
}

export default Home;