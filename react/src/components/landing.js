import React, { Component } from 'react';


import cat2 from '../assets/cat2.jpeg'
import cat3 from '../assets/cat3.png'
import art2 from '../assets/art2.png'
import art1 from '../assets/art1.jpg'
import gameplay from '../assets/gameplay.png'
import art3 from '../assets/art3.png'


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
                    <h1 className="text-center padded-title">Welcome to our club website!</h1>
                    <h5 className= "text-center">A top-down action shooter game about… breaking your weapon?</h5>
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
                                <img src={art3} className="aspect-fill" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h3 className="white-text">Art</h3>
                                    <p className="white-text">Character but mugshot!</p>
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
                    <div className="game-introduction">
                        <h3>Modicate</h3>
                        <p>You are Evan M, the sole heir to the Throne Empire, a private weapons research company in the futuristic city of Ida. Born into a life of comfort, you’ve never known hard work, or had any combat training. But today is a new era. The death of your father has brought many sorrows, and many more questions. Who did this? Why? When the government won’t answer these questions, it is up to you to pry it from them….</p>
                        <p>A secret multimillion credit prototype, your gadget is the pinnacle of design and power at Throne Empire. With its ability to absorb the power of destroyed weapons, you could wield unbelievable power at your fingertips. But for now, it is a matter of powering it up….</p>
                        <p>Modicate is a fast paced top-down shooter coming to PC set in the year (Year); focused on quick combat and clearing levels of enemies. Modicate currently features a complete combat system with an array of weapons and abilities to use in the current available levels in the demo</p>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Landing;