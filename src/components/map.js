import React from 'react'
import fridge from '/Users/caseycaruso/Pictures/2020/philly_fridges/philly-fridges/src/assets/phillyfridges11_9_desktop.png' 
import './components.css'


const FridgeMap = () =>{
    return(
    <div className="map-container">
      <img className="map" src={fridge}/>  <a className="download-button" download href={fridge}><button>Download Map</button></a>

    </div>
    )
}

export default FridgeMap