import React, { Component } from 'react';
import { Route, Redirect, Switch } from "react-router-dom";
import './Cadastros.css'
import Dashboard from './cadastros/Dashboard';
import Clientes from './cadastros/Clientes';
import Cliente from './cadastros/Cliente';

class Cadastros extends Component {
    render() {
      return (
        <div className="Cadastros">
            <Switch>
                <Route path={`${this.props.match.path}/clientes`} component={Clientes}/>
                <Route path={`${this.props.match.path}/cliente/:id`} component={Cliente}/>
                <Route path={`${this.props.match.path}`} component={Dashboard}/>
                <Redirect to={`${this.props.match.path}`}/>
            </Switch>
        </div>
      );
    }
  }
  
  export default Cadastros;
  