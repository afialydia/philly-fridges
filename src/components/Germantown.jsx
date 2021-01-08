import React from 'react'
import { Link } from "react-router-dom";
import germantownfridge from ".../assets/germantown_fridge/germantown_fridge.jpg"


import PhillyFridges from './phillyfridges'

import './components.css'
import '../App.css'

const Germantown = () =>{

    return(
        <div className="profile-container">
            <header>
                <nav>
                    <span className="nav-span">
                        <Link to ="/">
                        <PhillyFridges/>
                        </Link>
                    </span>
                </nav>
            </header>

            <div className="profile">
            <img className="phypho-2 seven" src={germantownfridge}/>

                <div className="main-heading-container">
                    <h1 className="main-heading">Germantown Community Fridge</h1>
                    <h5 className="address-heading">20 W Armat St Philadelphia, PA 19144</h5>
                </div>
                
                <section className="donations">
                    <h4 className="section-heading">Donation Drop-Off Information</h4>

                    <div>
                    <p>The fridge is 24/7 and anyone can donate when they'd like! If you are looking to make larger weekly drop offs please e-mail us!</p>
                    </div>
                </section>

                <section className="contact">
                    <h4 className="section-heading">Contact Information</h4>
                    <div>
                    <i class="far fa-paper-plane"/>Jane Ellis (germantownfridge@gmail.com)<br/>
                    <i class="fab fa-instagram"/> @germantownfridge
                   </div>
                </section>

                <section className="volunteer">
                    <div>
                        <h4 className="section-heading">Volunteer Information</h4> <p>https://forms.gle/NYspeh5mBFEeX9h4A</p>
                    </div>
                </section>

                <section className="mission">
                    <h4 className="section-heading">Mission</h4>
                    <p>Germantown Community Fridge is a 24/7 community run refrigerator that provides free food & essentials! Anyone is welcome to donate both perishables and non-perishables. We hope to help alleviate food insecurity and fight food waste! </p>
                </section>
                <section className="media">
                    <h6 className="section-heading">Media Coverage</h6>

                    <div>
                        <a href=" https://germantowninfohub.org/a-community-fridge-is-coming-to-germantown/" target="_blank">Germantown Info Hub</a>

                        
                    </div>


                </section>
             
                
                
                
            </div>
        </div>
    )
}

export default Germantown