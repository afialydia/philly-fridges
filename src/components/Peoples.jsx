import React from 'react'
import { Link } from "react-router-dom";
import peoplesfridge from '../assets/TPF-BlueLogo.svg'


import PhillyFridges from './phillyfridges'

import './components.css'
import '../App.css'

const Peoples = () =>{

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
                <img src={peoplesfridge}/>

                <div className="main-heading-container">
                    <h1 className="main-heading">The People's Fridge</h1>
                    <h5 className="address-heading">511 South 52nd Street Philadelphia, PA 19143</h5>
                </div>
                 <section className="mission">
                    <h4 className="section-heading">Mission</h4>
                    <p>Our vision is to provide community members with fresh food and essentials as a free resource. On one level, The People’s Fridge is a way to combat hunger in underserved communities during a pandemic and an economic crisis. We believe that food is a human right and should never be a privilege, but it is. This community fridge is a mutual aid, meaning, community members have equal responsibility filling, maintaining, and caring for it lovingly. Our fridge runs on a ‘take what you need, leave what you don't’ basis. Part of our purpose is to create a resource people can fall back on, trust, and rely on to be there without repercussions. <br/>The People's Fridge is dedicated in memory of our father, Kalpesh Parikh.</p>

                </section>

                <section className="contact">
                    <h4 className="section-heading">Contact Information</h4>
                    <div>
                    <i class="far fa-paper-plane"/>Best way to contact us is email: thepeoplesfridge215@gmail.com<br/>
                    <i class="fab fa-instagram"/> @thefridgeon52nd
                   </div>
                </section>

                <section className="donations">
                    <h4 className="section-heading">Donation Drop-Off Information</h4>

                    <div>
                    <p>Feel free to donate to our fridge 24/7! You can drop your donations off at the fridge. If you decide to do this please individually bag and label your donations. Everything you need will be on site!
                    If you would like to donate a large food haul, there is a link to sign up in our <a target="_blank" href="https://linktr.ee/TPF.resources">linktree </a>🌽 </p>
                    </div>

                    <br></br>

                    <div>
                        <p>Prepped meals: Please e-mail thepeoplesfridge215@gmail.com for any prepared food donations. They must be individually packages and labeled with what contents are inside.</p>
                    </div>
                </section>


               
                <section className="media">
                    <h6 className="section-heading">Media Coverage</h6>

                    <div>
                       <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/PNfEEMYprwM?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                   
            
                    </div>

                    <div>
                        <span>
                        <a href="https://remezcla.com/features/culture/community-fridges-in-the-united-states-mission-purpose-and-stories/" target="_blank">Remezcla</a>
                        <a href="https://philly.eater.com/21420094/community-fridges-philadelphia-mutual-aid-covid-19-food-insecurity" target="_blank">Philly Eater</a>
                        </span>
                        <span>
                        <a href="https://thephiladelphiacitizen.org/sandwich-pop-up-bogo-philadelphia/" target="_blank">The Philadelphia Citizen</a>
                        <a href="https://www.bonappetit.com/story/minas-world" target="_blank">Bon Appetit</a>
                        </span>
                        <span>
                        <a href="https://www.gridphilly.com/blog-home/2020/10/28/philly-community-fridges" target="_blank">Grid</a>
                        <a href="https://www.thecitypulse.com/post/community-refrigerators" target="_blank">The City Pulse</a>                        
                        </span>
                    </div>


                </section>
             
                
                
            </div>
        </div>
    )
}

export default Peoples