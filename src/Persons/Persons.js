import React from "react";
import './Person.css';

const person =(props)=>{
    return (
        <div className="Person">
       <p className="App banner" onClick={props.finya}> {props.name} created the first react function changing line {props.num}</p>
       <input type="text" onChange={props.changed} value={props.name}></input>
         <h1>{props.children}</h1>
       </div>
    )
}
export default person;