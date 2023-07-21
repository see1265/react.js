import React from 'react';
import jsonData from "./userdata.json"
import "./global.css";
import User from './User.jsx';
const Appp=()=>{
    return(
        <div>
           <User data={jsonData} />
        </div>
    )
}

export default Appp;
