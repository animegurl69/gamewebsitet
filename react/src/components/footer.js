import React, { Component } from 'react';

/**
 * basic component for copy. This is a basic react component
 */
class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className = "footer">
                 <p>copyright @2021 Jinhan Wu</p>
            </div>
           
        )
    }
}

export default Footer;