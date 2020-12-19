import React, { useState,useEffect } from "react";
import axios from "axios";

import {Context} from "./Context";


export default function  Adatok() {

    const [value, setValue] = useState("0");
    const [klub, setKlub] = useState([]);
    const [name, setName] = useState("");




    useEffect(() => {
        const fetchData = async () => {
            const {data: { clubs } } = await axios( 
                "https://raw.githubusercontent.com/openfootball/football.json/master/2020-21/en.1.clubs.json" );
            setKlub(clubs);
            //console.log(clubs);
        }
        fetchData()
    }, [])

    if (klub.length <= 0) {
        return "Loading..."
    }

    const changeName = (e) => {
        setName(e.target.value);
        //console.log(name);
    }

    
    

    function fillStorage() {
        var x = document.getElementById("teams");
        var y = document.getElementById("nev");
        localStorage.setItem('name', y.value);
        localStorage.setItem('team', x.options[x.selectedIndex].text);
      }
  
    return (
        <div>
     
     <form>
         Név: <input id ="nev"placeholder = "A te neved" onChange = {changeName} />
        <label for="teams">Kedvenc csapat: </label>
        <select name="teams" id="teams">
        
            <option value="1">{klub[0].name}</option>
            <option value="2">{klub[1].name}</option>
            <option value="3">{klub[2].name}</option>
            <option value="4">{klub[3].name}</option>
            <option value="5">{klub[4].name}</option>
            <option value="6">{klub[5].name}</option>
            <option value="7">{klub[6].name}</option>
            <option value="8">{klub[7].name}</option>
            <option value="9">{klub[8].name}</option>
            <option value="10">{klub[9].name}</option>
            <option value="11">{klub[10].name}</option>
            <option value="12">{klub[11].name}</option>
            <option value="13">{klub[12].name}</option>
            <option value="14">{klub[13].name}</option>
            <option value="15">{klub[14].name}</option>
            <option value="16">{klub[15].name}</option>
            <option value="17">{klub[16].name}</option>
            <option value="18">{klub[17].name}</option>
            <option value="19">{klub[18].name}</option>
            <option value="20">{klub[19].name}</option>
        </select>
        
        <button onClick = {fillStorage}
        
        >Ok</button>

        </form>
        
         
     <Context.Provider value = {{value, setValue}}>
     
     </Context.Provider>
     </div>
 )

}
