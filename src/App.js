import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


import 'bootstrap/dist/css/bootstrap.min.css'


import Home from './components/Home'
import Location from './components/Location'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path = "/" component = {Home} />
            <Route exact path = "/location" component = {Location} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
