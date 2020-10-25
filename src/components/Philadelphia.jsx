import React from 'react'
import { Link } from "react-router-dom";


import PhillyFridges from './phillyfridges'
import phlcommunityfridge from '../assets/philcomfridge/phlcommunityfridge-7.jpg'

import './components.css'
import '../App.css'

const Philadelphia = () =>{

    return(
        <div className="profile-container">

            <header>
            <nav>
            <span className="nav-span">
            <Link to ="/">
            <PhillyFridges/>
            </Link>
            </span></nav>
            </header>


                <div className="profile">
                <img className="phypho seven" src={phlcommunityfridge} />

                <h1>Philadelphia Community Fridge</h1>
                <h5>1229 S 6th Street (Radiance Medical Group) & 1901 S 9th Street (BOK)</h5>
                <section className="donations">
                    <h4>Donation Drop-Off Information</h4>
                    <span> The fridge is accessible 24/7 for drop-offs.<br/> Here is what we do and do not accept:</span>
                   <div className="yesno">
                        <div>
                            <h6>Yes Please!</h6>
                            <ul>
                            <li>Fresh Produce</li>
                            <li>Fruits, Vegetables, and Herbs</li>
                            <li>Picked goods</li>
                            <li>Prepackaged salad kits</li>
                            <li>Breads & Pastries</li>
                            <li>Eggs</li>
                            <li>Unopened Dairy products</li>
                            <li>Pantry items</li>
                            <li>Condiments, dressings, sauces</li>
                            <li>Rices, pastas, grains</li>
                            </ul>
                        </div>
                                                
                        <div>
                            <h6>No, thank you!</h6>
                            <ul>
                            <li>ANY meat, fish, seafood</li>
                            <li>Alcohol</li>
                            <li>Leftovers</li>
                            <li>Past expiration date products</li>
                            <li>Unlabelled products</li>
                            <li>Homemade meals from households due to sanitary reasons</li>
                            <li>Anything you wouldn't feed to your own family!</li>
                            </ul>
                        </div>
                    </div>

                </section>
                <section className="contact">
                    <h4>Contact Information</h4>
                    <div>
                    <i class="far fa-paper-plane"/>philadelphiacommunityfridge@gmail.com <br/>
                    <i class="fab fa-instagram"/> @phlcommunityfridge  <br/>
                    <i class="fab fa-twitter"/> @phillyfridge <br/>
                    <i class="fab fa-facebook"/> https://www.facebook.com/phlcommunityfridge</div>

                </section>
                <section className="mission">
                    <h4>Mission</h4>
                             <p>We're a community-centered, volunteer-based organization
dedicated to giving all Philadelphians access to fresh and healthy
food, combatting food insecurity and inequality in our city
through mutual aid.</p>

<p>Studies show that nearly 1 in 5 Philadelphia families struggle
with hunger, and food pantries' demand for fresh produce has
increased 3x since 2019.</p>

<p>We partner with local grocers and restaurants to stock this
fridge with perfectly good produce, pantry staples, and prepared
foods that would otherwise be thrown out.</p>

<p>BEING ABLE TO FEED YOURSELF AND
YOUR FAMILY ISN'T A PRIVILEGE —
IT'S A BASIC HUMAN RIGHT.</p>
                </section>
                <section className="media">
                    <h4>Media Coverage</h4>

                    <div>
                        {/* <a href="https://remezcla.com/features/culture/community-fridges-in-the-united-states-mission-purpose-and-stories/" target="_blank">Remezcla</a> */}
                       <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/aeErFXAjbps?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        
                    </div>


                </section>
             
                
                
                
            </div>
        </div>
    )
}

export default Philadelphia