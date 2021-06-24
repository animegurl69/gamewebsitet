import React, { Component } from 'react';

import logo from '../logo.svg'
/**
 * basic component for copy. This is a basic react component
 */
class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <a class="navbar-brand" href="/">
                    <img src={logo} width="30" height="30" alt="" />
                    Navbar
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Features</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Pricing</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;