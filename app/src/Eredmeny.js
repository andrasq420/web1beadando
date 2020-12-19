import React, { useEffect, useState } from "react";
import axios from 'axios';
import {css} from "styled-components/macro"


export default function Eredmeny() {

const [data, setData] = useState([]);
const [index, setIndex] = useState(0);



useEffect(() => {
    const load = async () => {
        const {data: { matches } } = await axios( 
            "https://raw.githubusercontent.com/openfootball/football.json/master/2020-21/en.1.json" );
        setData(matches);
        //console.log(matches);
    }
    load()
}, [])

const prev = () => {
    if( index >= 10){
    setIndex(index - 10);
    }
}

const next = () => {
    if( index <= data.length-11){
    setIndex(index + 10);
    }
}

if (data.length <= 0) {
    return "Loading..."
}

function checkForData(i) {
    if (data[i].score != null && data[i].score !== undefined) {
        return data[i].score.ft[0] + " - " + data[i].score.ft[1];
        
    }
    else {
        return "Nem lejátszott meccs" ;
    }
}

function Meccs(i) {
    return(
        data[i].team1 + " - " + data[i].team2
    )
}




return(
    <div css= {css`
    text-align: center;
    `}>
        <h1>
            <button onClick = {prev}>Előző hét</button>
            {data[index].round}
            <button onClick = {next} >Következő hét</button>
        </h1>

        <h3>
            <table class ="center">
                <tr><td>{Meccs(index)}</td>
                    <td>
                    {checkForData(index)}
                    </td>
                </tr>
                <tr> 
                    <td>{Meccs(index+1)}
                    </td>
                    <td>
                    {checkForData(index+1)}
                    </td>
                </tr>
                <tr> 
                    <td>{data[index+2].team1} - {data[index+2].team2}
                    </td>
                    <td>
                    {checkForData(index+2)}
                    </td>
                </tr>
                <tr> 
                    <td>{data[index+3].team1} - {data[index+3].team2}
                    </td>
                    <td>
                    {checkForData(index+3)}
                    </td>
                </tr>
                <tr> 
                    <td>{data[index+4].team1} - {data[index+4].team2}
                    </td>
                    <td>
                    {checkForData(index+4)}
                    </td>
                </tr>
                <tr> 
                    <td>{data[index+5].team1} - {data[index+5].team2}
                    </td>
                    <td>
                    {checkForData(index+5)}
                    </td>
                </tr>
                <tr> 
                    <td>{data[index+6].team1} - {data[index+6].team2}
                    </td>
                    <td>
                    {checkForData(index+6)}
                    </td>
                </tr>
                <tr> 
                    <td>{data[index+7].team1} - {data[index+7].team2}
                    </td>
                    <td>
                    {checkForData(index+7)}
                    </td>
                </tr>
                <tr> 
                    <td>{data[index+8].team1} - {data[index+8].team2}
                    </td>
                    <td>
                    {checkForData(index+8)}
                    </td>
                </tr>
                <tr> 
                    <td>{data[index+9].team1} - {data[index+9].team2}
                    </td>
                    <td>
                    {checkForData(index+9)}
                    </td>
                </tr>
            </table>
        </h3>

        


    </div>
    
);

}


