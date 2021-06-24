
import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Basic from './components/basiccomponent.js'

import About from './components/about.js'

import Landing from './components/landing.js'

import Navbar from './components/navbar.js'

/**
 * basic component for copy. This is a basic react component
 */
class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div class = "App">
            <Router>
              <Navbar/>
              <Switch>
                
                <Route exact path="/" component = {Landing}/>
                <Route exact path="/about" component = {About}/>
                
              </Switch>
            </Router>
          </div>
        )
    }
}

export default App;
