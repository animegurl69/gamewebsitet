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
           
            <div className= "aboutpage">
            <div className= "container about-container">
                    
                <h1 className = "text-center mb-5">Our Team</h1>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                    <div className="col">
                        <Card image= {henry} title= "henry" text= "bum"/>
                    </div>
                    <div className="col">
                        <Card image= {cat1} title= "cat1" text= "pp"/>
                    </div>
                    <div className="col">
                        <Card image= {cat2} title= "cat2" text= "pp2"/>
                    </div>
                    <div className="col">
                        <Card image= {cat3} title= "cat3" text= "lol"/>
                    </div>
                    
                </div>
               
            </div>
            <Footer/>
            </div>
        )
    }
}

export default About;