import React, { Component } from 'react';
import './Landing.css';
import Login from './Landing/Login';

class Landing extends Component {
    render() {
      return (
        <div className="Landing">
            <div className="Landing--left">
                Landing
            </div>
            <div className="Landing--right">
                <Login></Login>
            </div>
        </div>
      );
    }
  }
  
  export default Landing;