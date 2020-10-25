import React,{useState} from 'react'
import {fridgeData} from './fridgeData.js'
import FridgeSummaryContents from "./fridgeSummaryContents.jsx";


const FridgeSummaryContainer = ({props}) =>{


return(

    <div className={`fridge-container ${props.class_name}`}>
       <FridgeSummaryContents key={props.class_name} fridge={props} /> 

    </div>
)
}

       

export default FridgeSummaryContainer