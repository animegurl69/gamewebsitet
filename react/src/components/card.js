import React, { Component } from 'react';

/**
 * basic component for copy. This is a basic react component
 */
class Card extends Component {
    

    constructor(props) {
        super(props);

        this.state = {
            image: this.props.image,
            title: this.props.title,
            text: this.props.text,
        };
        
    }

    render() {
        return (
            <div className="card">
                <img src={this.state.image} className="card-img-top" alt="..." />
                <div className="card-body pink-text">
                    <h5 className="card-title">{this.state.title}</h5>
                    <p className="card-text">{this.state.text}</p>
                </div>
            </div>
        )
    }
}

export default Card;