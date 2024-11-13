import React from 'react'
import { AppBar, Typography, Toolbar, Avatar, Button, } from '@mui/material';
import memories from '../images/memories.jpg';
import {Link} from 'react-router-dom'


const Navbar = () => {


    const user= null

  return (
    <div>
         <AppBar  position="static" color="inherit" 
                 sx={{
                    display: 'flex', 
                    flexDirection: 'row', 
                    padding: "10px 50px",
                    borderRadius: 15,
                    margin: '30px 0',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                      }}>

         <div>             
        <Typography  variant="h2" align="center" component={Link} to='/'
            sx={{
                color: 'rgba(0,183,255, 1)',
            }}
        >
          Memories
        </Typography>
        <img
          src={memories}

          alt="memories"
          height="60"
          width="60"

        style={{ marginLeft: '15px',}}
        /> 
        </div>
        <Toolbar>
            {user? (
                <div>
                    <Avatar src='user.result.imageUrl'></Avatar>
                    <Typography variant='h6'>{user.result.name}</Typography>
                    <Button variant='contained' color='secondary'>Logout</Button>
                </div>
            ):(
                <Button component={Link} to='/auth' variant='contained' color='primary'>Sign-in</Button>
            )}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
