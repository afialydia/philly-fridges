import React from 'react'
import fridge from '../assets/phillyfridges11_9.PNG' 
import './components.css'


const FridgeMap = () =>{
    return(
    <div className="map-container">
      <img className="map" src={fridge}/>  <a download href={fridge}><button>Download Map</button></a>

    </div>
    )
}

export default FridgeMap