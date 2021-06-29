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
            <div className= "pink-text">
                <h1>Play our gmae</h1>
            </div>
            
        )
    }
}

export default Game;