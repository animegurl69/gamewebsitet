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

            <div className="page">
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={cat1} className="aspect-fill" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={cat2} className="aspect-fill" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={cat3} className="aspect-fill" alt="..." />
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Landing;