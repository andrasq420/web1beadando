import React, {useContext} from "react" ;
import styled from "styled-components"


import Link from "./Link"


const Container = styled.div `
background: rgb(40,40,40) ; 
height: 80px;
width: 100% ;
display:flex;
justify-content: space-evenly;
align-items: center;  
`



const Header = () => {
   
    return (
        <Container>
            

           
            <Link exact to ="/">Főoldal</Link>
            <Link exact to = "/adatok">Adatok</Link>
            <Link exact to = "/eredmeny">Eredmények</Link>
           
        </Container>
    )
}

export default Header


