import React, { useEffect, useState } from 'react'
import { AppBar, Typography, Toolbar, Avatar, Button, } from '@mui/material';
import memories from '../images/memories.jpg';
import {Link, useLocation, useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import  {jwtDecode}  from 'jwt-decode';


const Navbar = () => {


  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  
  const Logout = () =>{
    dispatch({type: 'LOGOUT'})
    navigate('/')

    setUser(null)
  }

    useEffect(()=> {
      const token = user?.token

      if(token){
        const decodedToken = jwtDecode(token)

        if(decodedToken.exp * 1000 < new Date().getTime()) Logout()
      }

      setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location])

    const handleLogout = ()=>{
        dispatch({ type: 'LOGOUT'})
        navigate('/')
        setUser(null)
    }

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
        <Typography  variant="h3" align="center" component={Link} to='/'
            sx={{
                color: 'rgba(0,183,255, 1)',
            }}
        >
          Memories
        </Typography>
        {/* <img
          src={memories}

          alt="memories"
          height="45"
          width="45"

        style={{ marginLeft: '15px',}}
        />  */}
        </div>
        <Toolbar>
            {user? (
                <div style={{display:'flex', alignItems:'center', gap:10,}}>
                    <Avatar src={user.result.picture}></Avatar>
                    <Typography variant='h6'>{user.result.name}</Typography>
                    <Button variant='contained' color='secondary' onClick={handleLogout}>Logout</Button>
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
