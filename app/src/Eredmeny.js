import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function Eredmeny() {

const [data, setData] = useState([]);



useEffect(() => {
    const load = async () => {
        const {data: { matches } } = await axios( 
            "https://raw.githubusercontent.com/openfootball/football.json/master/2020-21/en.1.json" );
        setData(matches);
        //console.log(data);
    }
    load()
}, [])

if (data.length <= 0) {
    return "Loading..."
}

return(
    <div>
        <h1>{data[0].round}</h1>
        <h2>{JSON.stringify(data)}</h2>
    </div>
    
);

}


