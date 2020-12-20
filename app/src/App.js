import React, { useEffect, useState, useReducer} from "react";
import axios from "axios" 
import {Redirect, Route, Switch } from "react-router-dom" ;
import {css} from "styled-components/macro"

import Eredmeny from "./Eredmeny"
import Fooldal from "./Fooldal"
import Adatok from "./Adatok"
import Counter from "./ageButton"


import Header from "./Header"
import getData from "./getData"

import './style.css' ;



const App = () => {








  return (
    <body>
      
        <header class = "header">
        <div>
        <img src= "https://tipsmake.com/data/images/collection-of-the-most-beautiful-football-logos-picture-2-sBRqpsGAd.jpg" 
            css= {css`
                width: 60px ;
                height: 60px ;
                border-radius: 50%;
                `
            }
            alt = "logo"
        >
        </img>
         Hungarian Premier League
        </div>
        
        </header>

        <div class = "header__content">
          
      
        <Header>
         
        </Header>

        <Switch>
              <Route  exact= {true} path= "/">
                <Fooldal class = "header__content"/>
              </Route>
              <Route path = "/adatok">
                <Adatok />
              </Route>
              <Route path = "/eredmeny">
                <Eredmeny />
              </Route>

            </Switch>
            {getData()}
            
            </div>

        <div>
        </div>
        
            
            
    </body>
  );
}

export default App;
