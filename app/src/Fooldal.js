import React from "react";
import {css} from "styled-components/macro"

const Fooldal = () => {
    return (
    <div class = "welcome">
        
    <img class ="welcome" src="https://obamabcn.com/wp-content/uploads/2019/11/logo-premier-league.jpg"       
    css= {css`
    width: 500px ;
    height: 350px ;
    `
    }
    
    />
    

    <div class = "welcome" 
    css= {css`
    text-align: center;
    padding: 5px;
 
    `
    }
    >
        
    Üdv a Premier League totó oldalon
    </div>
    
    
    </div>
    )
}

export default Fooldal;
