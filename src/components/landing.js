import React, { Component } from 'react';

import cat1 from '../assets/cat1.jpeg'
import cat2 from '../assets/cat2.jpeg'
import cat3 from '../assets/cat3.png'

/**
 * basic component for copy. This is a basic react component
 */
class Landing extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div className="container mt-3">
                <div id="carouselWithControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={cat1} className="aspect-fill" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h4 className= "pink-text">cat 1</h4>
                                <p className= "pink-text"> cat cool</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={cat2} className="aspect-fill" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h4 className= "pink-text">Cat 2</h4>
                                <p className= "pink-text">Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={cat3} className="aspect-fill" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h4 className= "pink-text">Cat 3</h4>
                                <p className= "pink-text">Some representative placeholder content for the first slide.</p>
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

        )
    }
}

export default Landing;