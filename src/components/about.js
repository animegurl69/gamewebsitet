import React, { Component } from 'react';

import Card from "./card.js"

import cat1 from '../assets/cat1.jpeg'
import cat2 from '../assets/cat2.jpeg'
import cat3 from '../assets/cat3.png'
import henry from '../assets/henry.PNG'


/**
 * basic component for copy. This is a basic react component
 */
class About extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container mt-3">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                    <div className="col">
                        <Card image= {henry} title= "henry" text= "bum"/>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={cat2} className="card-img-top" alt="..." />
                            <div className="card-body blue-text">
                                <h5 className="card-title">cat</h5>
                                <p className="card-text">pen</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={cat3} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={cat1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default About;