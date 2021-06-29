import React, { Component } from 'react';

/**
 * basic component for copy. This is a basic react component
 */
class Game extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className= "container pink-text headline mt-3">
                <h1>Play our game</h1>
                <iframe width= "100%" height="500" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            
        )
    }
}

export default Game;