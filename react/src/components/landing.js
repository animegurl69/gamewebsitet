import React, { Component } from 'react';


import cat2 from '../assets/cat2.jpeg'
import cat3 from '../assets/cat3.png'
import art2 from '../assets/art2.png'
import art1 from '../assets/art1.jpg'
import gameplay from '../assets/gameplay.png'

import Footer from './footer.js'
/**
 * basic component for copy. This is a basic react component
 */
class Landing extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="background">
                
                <div className="colored-block">
                    <h1 className = "text-center padded-title">Welcome to our club website!</h1>
                </div>
                
                <div className="container landing-container">
                    
                    <div id="carouselWithControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselWithControls" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselWithControls" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselWithControls" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={art2} className="active aspect-fill-center" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h3 className="white-text">Art</h3>
                                    <p className="white-text">Our cool main character!</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={gameplay} className="aspect-fill" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h3 className="white-text">Gameplay</h3>
                                    <p className="white-text">A cool snapshot from our game!</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={art1} className="aspect-fill" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h3 className="white-text">Art</h3>
                                    <p className="white-text">Cool senery!</p>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselWithControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselWithControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Landing;