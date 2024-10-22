import React from "react"
import ReactDOM from "react-dom"
import {Provider} from "react-redux"
import { configureStore } from '@reduxjs/toolkit';
// import {  applyMiddleware, compose } from "redux"
// import { thunk } from 'redux-thunk';  // Named import
import reducers from './reducers';


import App from "./App"

// const store = configureStore({reducer:reducers})
const store = configureStore({
    reducer: reducers,
    devTools: process.env.NODE_ENV !== "production",
  });


ReactDOM.render(
    <Provider store={store}>
        <App/> 
    </Provider>, 
 document.getElementById("root"))