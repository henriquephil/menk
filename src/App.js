import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SecureRoute } from 'react-route-guard';
import './App.css';
import Landing from './apps/Landing';
import Menk from './apps/Menk';
import authRouteGuard from './apps/AuthRouteGuard';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/landing" component={Landing}/>
            <SecureRoute path="/" component={Menk} routeGuard={authRouteGuard} redirectToPathWhenFail='/landing'/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
