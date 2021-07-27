import React, { Component } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Favourite from './components/Favourite';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/'><Home /></Route>
            <Route exact path='/Favorite'><Favourite /></Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App;
