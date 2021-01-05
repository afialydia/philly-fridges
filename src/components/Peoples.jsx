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
            </span></nav>
            </header>


            <div className="profile">
                <img src={peoplesfridge}/>
                <h1>The People's Fridge</h1>
                <h5>511 South 52nd Street Philadelphia, PA 19143</h5>
                <section className="donations">
                    <h4>Donation Drop-Off Information</h4>
                    <p>Feel free to donate to our fridge 24/7! You can drop your donations off at the fridge. If you decide to do this please individually bag and label your donations. Everything you need will be on site! </p>
                    
                    <p>If you would like to donate a large food haul, there is a link to sign up in our <a target="_blank" href="https://linktr.ee/TPF.resources">linktree </a>🌽 <br/>
                    Prepped meals: Please e-mail thepeoplesfridge215@gmail.com for any prepared food donations. They must be individually packages and labeled with what contents are inside.</p>

                </section>
                <section className="contact">
                    <h4>Contact Information</h4>
                    <div>
                    <i class="far fa-paper-plane"/>Best way to contact us is email: thepeoplesfridge215@gmail.com<br/>
                    <i class="fab fa-instagram"/> @thefridgeon52nd
                   </div>
                </section>
                <section className="mission">
                    <h4>Mission</h4>
                    <p>Our vision is to provide community members with groceries and pantry items as a free resource. On one level, The People’s Fridge is a way to combat hunger in underserved communities during a pandemic and an economic crisis. We believe that food is a human right and should never be a privilege, but it is. This community fridge is a mutual aid, meaning, community members have equal responsibility filling, maintaining, and caring for it lovingly.  Our fridge runs on a ‘take what you need, leave what you can’ basis. There is no pre-screening to take or leave something from the fridge. Part of our purpose is to create a resource people can fall back on, trust, and rely on to be there without repercussions.</p>

                    <p>The People's Fridge was inspired by the recent passing of our father. Because our father passed due to COVID19, we didn't have a way to say goodbye. For us, the fridge is a way to memorialize his lifelong commitment to feeding people. Our mom and dad instilled the ideals of food justice within us, even though they have never come across the term before. Our father modeled mutual aid for us consistently. Him and my mom really loved organizing diaper and formula drops, meal shares. It could be because our family has extremely benefitted from that kind of community aid, growing up in Brooklyn.</p>
                </section>
                <section className="media">
                    <h6>Media Coverage</h6>

                    <div>
                        <a href="https://remezcla.com/features/culture/community-fridges-in-the-united-states-mission-purpose-and-stories/" target="_blank">Remezcla</a>
                        <a href="https://philly.eater.com/21420094/community-fridges-philadelphia-mutual-aid-covid-19-food-insecurity" target="_blank">Philly Eater</a>
                        <a href="https://thephiladelphiacitizen.org/sandwich-pop-up-bogo-philadelphia/" target="_blank">The Philadelphia Citizen</a>
                        <a href="https://www.bonappetit.com/story/minas-world" target="_blank">Bon Appetit</a>
                        
                    </div>


                </section>
             
                
                
                
            </div>
        </div>
    )
}

export default Peoples