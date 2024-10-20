import React, { useEffect } from 'react'
import { Container, AppBar, Typography, Grid, Grow } from '@mui/material';
import { useDispatch } from 'react-redux';
import Posts from "./components/Posts/Posts"
import {getPosts} from "./actions/posts"
import Form from "./components/Form/Form"
import memories from "./images/memories.jpg"
import useStyles from "./styles.js"


const App = () => {

  const classes = useStyles();
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getPosts())
  },[dispatch])

  return (
    <Container maxWidhth= "lg">
        <AppBar className={classes.appBar}  position="static" color="inherit">
            <Typography className={classes.heading} variant="h2" align="center"  >Memories</Typography>
            <img src={memories} className={classes.image} alt="memories" height="60" width={60}/>

        </AppBar>
        <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems='stretch'>
            <Grid item xs= {2} sm={7}>
            <Posts/>
         
            </Grid>
            <Grid item xs= {2} sm={7}>
            <Form/>

            </Grid>

            </Grid>
          </Container>
        </Grow>

    </Container>
  )
}

export default App


