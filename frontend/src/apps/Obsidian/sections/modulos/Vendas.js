import React, { Component } from 'react';
import { Route, Redirect, Switch } from "react-router-dom";
import './Vendas.css'
import Dashboard from './Vendas/Dashboard';
import OrcamentoList from './Vendas/OrcamentoList';
import OrcamentoForm from './Vendas/OrcamentoForm';

class Vendas extends Component {
    render() {
      return (
        <div className="Vendas">
            <Switch>
                <Route path={`${this.props.match.path}/orcamentos`} component={OrcamentoList}/>
                <Route path={`${this.props.match.path}/orcamento/:id`} component={OrcamentoForm}/>
                <Route path={`${this.props.match.path}`} component={Dashboard}/>
                <Redirect to={`${this.props.match.path}`}/>
            </Switch>
        </div>
      );
    }
  }
  
  export default Vendas;