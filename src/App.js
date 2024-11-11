import React, { useEffect, useState } from 'react';
import { Container, AppBar, Typography, Grid, Grow } from '@mui/material';
import { useDispatch } from 'react-redux';
import Posts from './components/Posts/Posts';
import { getPosts } from './actions/posts';
import Form from './components/Form/Form';
import memories from './images/memories.jpg';
import useStyles from './styles.js'; // Make sure useStyles is properly set up

const App = () => {
  const classes = useStyles(); // Using custom styles from `useStyles`
  const dispatch = useDispatch();
  const [ currentId, setCurrentId] = useState(null)

  // Fetch posts on component mount
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId,dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar}position="static" color="inherit" >
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img
          src={memories}
          className={classes.image}
          alt="memories"
          height="60"
          width="60"
        /> 
      </AppBar>
      <Grow in>
        <Container>
          <Grid container flexDirection='column-reverse' justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts currentId ={currentId} setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={5}>
              <Form currentId ={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
