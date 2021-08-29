import React, { Component } from 'react';
import Unity, { UnityContent} from 'react-unity-webgl'

import Footer from './footer.js'

/**
 * basic component for copy. This is a basic react component
 */
class Game extends Component {
    constructor(props) {
        super(props);
        this.unityContent = new UnityContent(
            "Build/Game 1 demo builds.json",
            "Build/UnityLoader.js"
          );
    }

    render() {
        return (
            <div className= "background">


            <div className= "container game-container pink-text headline">
                <h1>Play our game</h1>
                <Unity calssName= "live-game" unityContent={this.unityContent} />
                <iframe className= "ytvideo" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                
            </div>
            <Footer/>
            </div>
            
        )
    }
}

export default Game;