import React, {useState} from "react";

import { Parallax, ParallaxLayer, Transition } from "react-spring/renderprops-addons";

import "./App.css";

import FAQ from './components/FAQ.jsx'
import cucumber from './assets/veggies/cucumber.svg'
import bokchoy from './assets/veggies/bokchoy.svg'
import broccoli from './assets/veggies/broccoli.svg'
import cabbage from './assets/veggies/cabbage.svg'
import carrot from './assets/veggies/carrot.svg'
import corn from './assets/veggies/corn.svg'
import eggplant from './assets/veggies/eggplant.svg'
import sugarsnap from './assets/veggies/sugarsnap.svg'
import mushroom from './assets/veggies/mushroom.svg'
import jalepeno from './assets/veggies/jalepeno.svg'
import pepper from './assets/veggies/pepper.svg'
import onion from './assets/veggies/onion.svg'
import A from './assets/alpha-numeric/A.svg'
import B from './assets/alpha-numeric/B.svg'
import C from './assets/alpha-numeric/C.svg'
import D from './assets/alpha-numeric/D.svg'
import E from './assets/alpha-numeric/E.svg'
import F from './assets/alpha-numeric/F.svg'
import G from './assets/alpha-numeric/G.svg'
import H from './assets/alpha-numeric/H.svg'
import I from './assets/alpha-numeric/I.svg'
import J from './assets/alpha-numeric/J.svg'
import K from './assets/alpha-numeric/K.svg'
import L from './assets/alpha-numeric/L.svg'
import M from './assets/alpha-numeric/M.svg'
import N from './assets/alpha-numeric/N.svg'
import O from './assets/alpha-numeric/O.svg'
import P from './assets/alpha-numeric/P.svg'
import Q from './assets/alpha-numeric/Q.svg'
import R from './assets/alpha-numeric/R.svg'
import S from './assets/alpha-numeric/S.svg'
import T from './assets/alpha-numeric/T.svg'
import U from './assets/alpha-numeric/U.svg'
import V from './assets/alpha-numeric/V.svg'
import W from './assets/alpha-numeric/W.svg'
import X from './assets/alpha-numeric/X.svg'
import Y from './assets/alpha-numeric/Y.svg'
import Z from './assets/alpha-numeric/Z.svg'
import One from './assets/alpha-numeric/1.svg'
import Two from './assets/alpha-numeric/2.svg'
import PhillyFridges from './components/phillyfridges'

class App extends React.Component {

	render() {
	
		return (
			
				<div className="App">
				<header>
					<nav>
						<span className="nav-span" onClick={() => this.parallax.scrollTo(0)}><PhillyFridges/></span>
						<span  className="nav-span"  onClick={() => this.parallax.scrollTo(1)}>Community Fridges</span>
						<span className="nav-span"  onClick={() => this.parallax.scrollTo(2)}>Resources</span>
						<span className="nav-span"  onClick={() => this.parallax.scrollTo(3)}>FAQ</span>
						
					</nav>
				</header>
  <Parallax ref={ref => (this.parallax = ref)} 
  style={{ scrolling:'true', display:'grid', backgroundColor: '#fc993f' }} pages={4}>
        <ParallaxLayer offset={0} speed={1} style={{ backgroundColor: 'white' }} />
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: 'white' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: 'white' }} />
        <ParallaxLayer offset={3} speed={1} style={{ backgroundColor: 'white' }} />

        {/* <ParallaxLayer offset={0} speed={0} factor={4} style={{  backgroundColor:'white' }} /> */}
{/* 
        <ParallaxLayer offset={3.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
          <img src={onion} style={{ width: '15%', marginLeft: '70%' }} />
        </ParallaxLayer> */}

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={bokchoy} style={{ display: 'block', width: '20%', marginLeft: '45%', marginTop:'5%' }} />
          <img src={carrot} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          {/* <img src={cabbage} style={{ display: 'block', width: '20%', marginLeft: '70%' }} /> */}
          {/* <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} /> */}
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.2} style={{ opacity: 0.2 }}>
          {/* <img src={pepper} style={{ display: 'block', width: '10%', marginLeft: '10%' }} /> */}

          <img src={corn} style={{ display: 'block', width: '15%', marginLeft: '55%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={-0.1} style={{ opacity: 0.4 }}>
          {/* <img src={mushroom} style={{ display: 'block', width: '20%', marginLeft: '60%' }} /> */}
          {/* <img src={eggplant} style={{ display: 'block', width: '25%', marginLeft: '30%' }} /> */}
          <img src={cucumber} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          {/* <img src={jalepeno} style={{ display: 'block', width: '20%', marginLeft: '5%' }} /> */}
          {/* <img src={eggplant} style={{ display: 'block', width: '15%', marginLeft: '75%' }} /> */}
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={-0.1} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', pointerEvents: 'none' }}>
          <img src={eggplant} style={{ width: '20%' }} />
        </ParallaxLayer>

		

        <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: '80%',
            backgroundPosition: 'center',
            // backgroundImage: url('clients', true)
          }}
        />

        <ParallaxLayer
          offset={0}
          speed={0.1}
          // onClick={() => this.parallax.scrollTo(1)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={corn} style={{ width: '20%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          // onClick={() => this.parallax.scrollTo(2)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
          <img src={broccoli} style={{ width: '40%' }} />
        </ParallaxLayer>
		

        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}
          // onClick={() => this.parallax.scrollTo(0)}
          >
          <img src={cabbage} style={{ width: '30%'}} />
        </ParallaxLayer>

		<ParallaxLayer
          offset={2}
          speed={0.1}
          onClick={() => this.parallax.scrollTo(2)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* <img src={cabbage} style={{ width: '40%' }} /> */}
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={bokchoy} style={{ display: 'block', width: '20%', marginLeft: '35%',marginTop:"5%" }} />
          <img src={mushroom} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>
        
        <ParallaxLayer offset={3} speed={-0.2} style={{ opacity:1 }}>
          <FAQ />
        </ParallaxLayer>

      </Parallax>
			
			</div>
			
		);
	}
}

export default App;
