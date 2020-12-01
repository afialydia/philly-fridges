import React,{useState} from 'react'
import { Link } from "react-router-dom";



const FridgeSummaryContents = ({fridge}) =>{
const {name, address, addresses, mission_1,mission_2, link} = fridge
return(
<div className="fridge">
        <h2>{name}</h2>
        <span>{address}</span>
        {addresses ? 
        <div className="addresses">
        {addresses.map(element => {
             return   <p>{element}</p>
        })}
        </div> : ""}
       { mission_1 ? <div className="columns">
                <div>
                        <p className={mission_2? "twocol": "onecol"}>
                        {mission_1}
                        </p>
                        {mission_2? <p className="twocol">{mission_2} </p>: ""}
                </div>

                <Link to={link}><button className="link">Learn More</button></Link>
        </div>:  <div><a href="https://www.mama-tee.com/communityfridge" target="_blank"><button className="link">Learn More</button></a></div>}
</div>
)
}

export default FridgeSummaryContents