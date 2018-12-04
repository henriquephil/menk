import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Userbar from './components/Userbar/Userbar';
import Landing from './apps/Landing';
import Menk from './apps/Menk';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Userbar></Userbar>
          <Switch>
            <Route path="/landing" component={Landing}/>
            <Route path="/" component={Menk}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
