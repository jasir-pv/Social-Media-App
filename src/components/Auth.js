import React, { useState } from 'react';
import { Avatar, Button, Container, Paper, Typography, Grid } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Input from './Input';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { GoogleLogin,googleLogout } from '@react-oauth/google';


const theme = createTheme();

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false)


  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = () => {
   
  };

  const handleChange = () => {
    
  };

  const switchMore = () => {
    setIsSignup ((prevShowPassword) => !prevShowPassword)
    handleShowPassword(false)
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
                <Grid item>
                <Button onClick={switchMore}>
                  {isSignup? "Already hava an accound? Sign In" : "Dont't have an accound ? Sign Up"}
                </Button>
                <div>SEARCH</div>
                <div>
                  {isSignup ? (
                    <div>Logged In</div>
                  ):(
                    <GoogleLogin
                      onSuccess={(response)=> console.log(response)}
                      onError={()=> console.log('Error')}
                    />
                  )}
                </div>
                </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default Auth;
