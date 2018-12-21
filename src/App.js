import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SecureRoute } from 'react-route-guard';
import './App.css';
import Landing from './apps/Landing';
import Menk from './apps/Menk';
import TokenService from './services/TokenService';

class App extends Component {
    authRouteGuard = new TokenService();
    render() {
        return (
            <Router>
            <div className="App">
                <Switch>
                    <Route path="/landing" component={Landing}/>
                    <SecureRoute path="/" component={Menk} routeGuard={this.authRouteGuard} redirectToPathWhenFail='/landing'/>
                </Switch>
            </div>
            </Router>
        );
    }
}

export default App;
