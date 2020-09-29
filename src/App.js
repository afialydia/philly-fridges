import React, {useState} from "react";

import { Parallax, ParallaxLayer, Transition } from "react-spring/renderprops-addons";

import "./App.css";

import cucumber from './assets/cucumber.svg'

class App extends React.Component {

	render() {
	
		return (
			
				<div>
				<header>
					<nav>
						<span className="nav-span" onClick={() => this.parallax.scrollTo(0)}>Map </span>
						<span  className="nav-span"  onClick={() => this.parallax.scrollTo(1)}>Resources</span>
						<span className="nav-span"  onClick={() => this.parallax.scrollTo(2)}>Fridges</span>
						<span className="nav-span"  onClick={() => this.parallax.scrollTo(3)}>Mutual Aid</span>
						
					</nav>
				</header>
				<Parallax
					ref={(ref) => (this.parallax = ref)}
					pages={4}
					scrolling={true}
					style={{ 
						display: "grid", backgroundColor: "#F8D3B4" }}
				>
					<ParallaxLayer
						offset={0}
						speed={1}
						style={{ backgroundColor: "#F8D3B4" }}
					/>
					<ParallaxLayer
						offset={1}
						speed={1}
						style={{ backgroundColor: "#F8D3B4" }}
					/>
					<ParallaxLayer
						offset={2}
						speed={1}
						style={{ backgroundColor: "#F8D3B4" }}
					/>
					<ParallaxLayer
						offset={3}
						speed={1}
						style={{ backgroundColor: "#F8D3B4" }}
					/>
					<ParallaxLayer
						offset={0}
						speed={2}
						factor={4}
						// style={{
						// 	// border: "solid",
						// 	backgroundSize: "cover"
						// }}
					>	{/*top right */}
						{/* <img
							src={Blob1}
							className="top right-blob"
							alt="circular blob"
						/> */}
					</ParallaxLayer>
					<ParallaxLayer offset={0} speed={-2} 
					// style={{ opacity: .76 , marginLeft: "13vw", marginTop: "3vh"}}
					className="parallax-style top-right"
					>
					{/*top left */}
						{/* <img
							src={Blob2}
							className="top left-blob"
						
						/> */}
					</ParallaxLayer>

					<ParallaxLayer
						factor={1.5}
						offset={0.3}
						speed={-0.3}
						style={{ pointerEvents: "none" }, 
						{width: "100vw" },{opacity:0.6}}
					>
					{/* mid top about and message */}
						{/* <img
							src={Blob8}
							className="top center-blob"
						/> */}
					</ParallaxLayer>

					<ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.7 }}>
						{/* mid center and about left */}
						  {/* <img
						 src={Blob9}
							style={{ display: "block", width: "25%", marginLeft: "-5%" }}
						/> */}
						
						
					</ParallaxLayer>

				

					<ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.5 }}>
						{/* about right */}
						{/* <img
						src={Blob10}
							style={{ display: "block", width: "60%", marginLeft: "50%" }}
						/> */}
						
					</ParallaxLayer>

					<ParallaxLayer offset={2.6} speed={-0.6} style={{ opacity: 0.8 }}>
						<img
							src={cucumber}
							style={{ width: "40vw"}, {margin:"0 0 0 80%" }}
						/> 
						
					</ParallaxLayer>

					<ParallaxLayer offset={3} speed={0.6} style={{ opacity: 0.8 }}> 
					{/* contact blob */}
						{/* <img
							src={Blob7}
							className="bottom contact-blob"
						/> */}
					</ParallaxLayer>

					<ParallaxLayer
						offset={0}
						speed={0.1}
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<div className='title'style={{
							backgroundSize: "cover"}}>
							<div><h1>Philly Fridges</h1>
							<h3>Mutual Aid </h3>
							<h4>Philly, PA</h4>
							</div>
						</div>
					</ParallaxLayer>

					<ParallaxLayer
						offset={1}
						speed={0.1}
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center"
						}}
					>
						{/* <AboutPage /> */}
					</ParallaxLayer>
					{/* <ParallaxLayer
						offset={1}
						speed={0.5}
						style={{
							display: "flex",
							
						}}
					>
						<div>
							<img className="pic" src={headshot}/> 
						</div>
					</ParallaxLayer> */}
					<ParallaxLayer
						offset={2}
						speed={-0}
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						{/* <PortfolioPage /> */}
					</ParallaxLayer>

					<ParallaxLayer
						offset={3}
						speed={-0}
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							marginTop: "1%",
						}}
					>
						{/* <ContactPage /> */}
					</ParallaxLayer>
				</Parallax>
			
			</div>
			
		);
	}
}

export default App;
