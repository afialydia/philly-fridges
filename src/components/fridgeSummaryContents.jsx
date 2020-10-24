import React,{useState} from 'react'
import { Link } from "react-router-dom";



const FridgeSummaryContents = ({fridge}) =>{
const {name, address, mission_1,mission_2, link} = fridge
return(
<div className="fridge">
            <h2>{name}</h2>
            <span>{address}</span>
            <div className="columns"><div><p className={mission_2? "twocol": "onecol"}>
            {mission_1}</p>

{mission_2? <p className="twocol">{mission_2} </p>: ""}</div>
<button><Link to={link}>Learn More</Link></button></div>

            
        </div>
)
}

export default FridgeSummaryContents