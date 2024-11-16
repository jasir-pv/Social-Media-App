import React, { useState } from 'react';
import { Avatar, Button, Container, Paper, Typography, Grid } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Input from './Input';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { GoogleLogin,googleLogout } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import {jwtDecode} from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import {signup,signin} from '../actions/auth'


const initialState ={ firstName: '' , lastName: '', email:'', password:'', confirmPassword: ''}

const theme = createTheme();

const Auth = () => {

  const [formData, setFormData] = useState(initialState)
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false)


  const navigate = useNavigate()
  const dispatch = useDispatch()


  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
      if(isSignup){
        dispatch(signup(formData,navigate))
      } else{
        dispatch(signin(formData,navigate))
      }
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]:e.target.value})
  };

  const switchMore = () => {
    setIsSignup ((prevShowPassword) => !prevShowPassword)
    setShowPassword(false)
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Paper
          elevation={3}
          sx={{
            marginTop: theme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: theme.spacing(2),
          }}
        >
          <Avatar
            sx={{
              margin: theme.spacing(1),
              backgroundColor: theme.palette.secondary.main,
            }}
          >
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
          <form
            onSubmit={handleSubmit}
            style={{ width: '100%', marginTop: theme.spacing(3) }}
          >
            <Grid container spacing={2}>
              {isSignup && (
                <>
                  <Input
                    name="firstName"
                    label="First Name"
                    handleChange={handleChange}
                    autoFocus
                    half
                  />
                  <Input
                    name="lastName"
                    label="Last Name"
                    handleChange={handleChange}
                    half
                  />
                </>
              )}
              <Input name="email" label="Email" handleChange={handleChange} type="email" />
              <Input
                name="password"
                label="Password"
                handleChange={handleChange}
                type={showPassword ? 'text' : 'password'}
                handleShowPassword={handleShowPassword}
              />
              {isSignup && (
                <Input
                  name="confirmPassword"
                  label="Repeat Password"
                  handleChange={handleChange}
                  type="password"
                />
              )}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ margin: theme.spacing(3, 0, 2) }}
            >
              {isSignup ? 'Sign Up' : 'Sign In'}
            </Button>
            <Grid container justify='flex-end'>
              
              
              
                <Button
                   fullWidth
              variant="contained"
              color="primary"
              sx={{ margin: theme.spacing(3, 0, 2) }}
                >
                  {isSignup ? (
                    <div>Logged In</div>
                  ):(
                    <GoogleLogin
                     
                      onSuccess={ async (res) => {
                        const decodedToken = jwtDecode(res?.credential); // Decode to get user info
                        const token = res?.credential;

                        try {
                          dispatch({ type: 'AUTH', data: { result: decodedToken, token } });
                          navigate('/')
                        } catch (error) {
                          console.log(error);
                        }
                      }}
                      onError={() => console.log('Error')}
                    />
                  )}
                </Button>
                <Grid item>
                <Button onClick={switchMore}>
                  {isSignup? "Already hava an accound? Sign In" : "Dont't have an accound ? Sign Up"}
                </Button>
                </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default Auth;
