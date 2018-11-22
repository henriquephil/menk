import React, { Component } from 'react';
import { Route, Redirect, Switch } from "react-router-dom";
import './Vendas.css'
import Dashboard from './vendas/Dashboard';
import Orcamentos from './vendas/Orcamentos';
import Orcamento from './vendas/Orcamento';

class Vendas extends Component {
    render() {
      return (
        <div className="Vendas">
            <Switch>
                <Route path={`${this.props.match.path}/orcamentos`} component={Orcamentos}/>
                <Route path={`${this.props.match.path}/orcamento/:id`} component={Orcamento}/>
                <Route path={`${this.props.match.path}`} component={Dashboard}/>
                <Redirect to={`${this.props.match.path}`}/>
            </Switch>
        </div>
      );
    }
  }
  
  export default Vendas;
  