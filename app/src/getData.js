import React from 'react'
import {css} from "styled-components/macro"



export default function getData() {
    var nev = localStorage.getItem('name');
    var csapat = localStorage.getItem('team');
    return (
    <div css= {css`
    text-align: right;
    `
}>
       <p>Név: {nev} </p> 
       <p>Kedvenc csapat: {csapat}</p> 
    </div>
    )
}