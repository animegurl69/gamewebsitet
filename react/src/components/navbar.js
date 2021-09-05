

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
            // TODO 3: implement navbar using v5 API
            <nav className="navbar navbar-expand-sm navbar-light fixed-top transparent-style">
                <div className="container-fluid">
                    <a class="navbar-brand" href="/">
                        <img src={logo} alt="" width="30" height="24" class="d-inline-block align-text-top" />
                        EID
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                            <a className="nav-link" href="/about">About</a>
                            <a className="nav-link" href="/game">Game</a>
                        </div>
                    </div>
                </div>
            </nav>

        )
    }
}

export default Navbar;