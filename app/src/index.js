import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router } from "react-router-dom" ;

import App from "./App" ;
import './style.css'

const rootelement = document.getElementById("root")
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootelement
);

