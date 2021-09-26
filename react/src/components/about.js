import React, { Component } from 'react';

import Card from "./card.js"

import cat1 from '../assets/cat1.jpeg'
import cat2 from '../assets/cat2.jpeg'
import cat3 from '../assets/cat3.png'
import henry from '../assets/henry.PNG'

import Footer from './footer.js'


/**
 * basic component for copy. This is a basic react component
 */
class About extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
           
            <div className= "background">
                <div className="colored-block">
                    <h1 className="text-center padded-title">Our Team</h1>
                </div>
            <div className= "container about-container">
                
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                    <div className="col">
                        <Card image= {cat2} title= "Torry Li" text= "Game Programmer"/>
                    </div>
                    <div className="col">
                        <Card image= {cat1} title= "Jinhan Wu" text= "Website Programmer"/>
                    </div>
                    <div className="col">
                        <Card image= {cat2} title= "Luke Antle" text= "Project Communications"/>
                    </div>
                    <div className="col">
                        <Card image= {cat3} title= "Zhiyang Jiang" text= "Sprite Creator"/>
                    </div>
                    <div className="col">
                        <Card image= {henry} title= "Henry Tavaris" text= "guy"/>
                    </div>
                    <div className="col">
                        <Card image= {cat3} title= "Lars Khan" text= "Music and SFX Writer"/>
                    </div>
                    <div className="col">
                        <Card image= {cat3} title= "Nan Jiang" text= "Splash Art and Second Sprite Creator"/>
                    </div>
                    
                </div>
                <div className="game-introduction">
                <a href=“https://www.kickstarter.com/projects/eastindiedevs/modicate/”>Kickstarter. Donate here!</a>
                    </div>
            </div>
            <Footer/>
            </div>
        )
    }
}

export default About;