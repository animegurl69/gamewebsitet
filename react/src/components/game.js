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
            "Build/real build.json",
            "Build/UnityLoader.js"
          );
    }

    render() {
        return (
            <div className= "background">


            <div className= "container game-container pink-text headline">
                <h1>Play our game</h1>
                <Unity calssName= "live-game" unityContent={this.unityContent} />
                
                
            </div>
            <Footer/>
            </div>
            
        )
    }
}

export default Game;