import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'

import store from './store'

import 'bootstrap/dist/css/bootstrap.min.css'


import Home from './components/Home'
import Location from './components/Location'

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <div className="App">
          <Router>
            <Switch>
              <Route exact path = "/" component = {Home} />
              <Route path = "/location/:title/:type/:long/:id/" component = {Location} />
            </Switch>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
