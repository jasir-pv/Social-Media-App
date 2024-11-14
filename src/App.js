import React from 'react';
import { Container } from '@mui/material';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from './components/Auth.js';
import { GoogleOAuthProvider } from '@react-oauth/google';




const App = () => {

  return (
    <GoogleOAuthProvider clientId={`${process.env.REACT_APP_GOOGLE_API_TOKEN}`}>
    <BrowserRouter>
    <Container maxWidth="lg">
    <Navbar/>
    <Routes>
      <Route path='/' element={ <Home/>}/>
      <Route path='/auth' element={ <Auth/>}/>

    </Routes>
    <Home/>
    </Container>
    </BrowserRouter>
    </GoogleOAuthProvider>
  );
};

export default App;
