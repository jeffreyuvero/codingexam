import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


import 'bootstrap/dist/css/bootstrap.min.css'


import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path = "/" component = {Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
