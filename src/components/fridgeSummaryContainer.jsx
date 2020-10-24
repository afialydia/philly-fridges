import React,{useState} from 'react'
import {fridgeData} from './fridgeData.js'
import FridgeSummaryContents from "./fridgeSummaryContents.jsx";


const FridgeSummaryContainer = () =>{

    const [state,setState]= useState(fridgeData)

    console.log(state)

return(

    <div>

    {state.map(element => {
        console.log(element.class)
        return(
        <div className={`fridge-container ${element.class}`}>
        <FridgeSummaryContents key={element.class} fridge={element} /> 
        </div>)
})}
    </div>
)
}

       

export default FridgeSummaryContainer