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
                 <h3>copyright @me</h3>
            </div>
           
        )
    }
}

export default Footer;