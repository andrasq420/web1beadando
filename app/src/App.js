import React, { useEffect, useState} from "react";
import axios from "axios" 
import {Redirect, Route, Switch, Link} from "react-router-dom" ;

import Eredmeny from "./Eredmeny"
import Fooldal from "./Fooldal"
import Tippek from "./Tippek"

import './style.css' ;


const App = () => {
  return (
    <div>
      <header class = "header">
        <h1>
        Totó
          <div class = "header__content">
          
          <Switch>

      <Route exact= {true} path= "/">
        <Fooldal />
      </Route>
      <Route path = "/tippek">
        <Tippek />
      </Route>
      <Route path = "/eredmeny">
        <Eredmeny />
      </Route>

      </Switch>
    </div>
        </h1>
        </header>
        
          <body>
       <ul class = "Menusor">
        <li>
          <Link to ="/">Főoldal</Link>
        </li>
        <li>
          <Link to = "/tippek">Tippek</Link>
        </li>
        <li>
          <Link to = "/eredmeny">Eredmények</Link>
        </li>
        </ul>
          </body>
      
    </div>
  );
}

export default App;
