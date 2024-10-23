import React from "react"
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux"
import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers';


import App from "./App"


const store = configureStore({
    reducer: reducers,
    devTools: process.env.NODE_ENV !== "production",
  });


  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  ); 