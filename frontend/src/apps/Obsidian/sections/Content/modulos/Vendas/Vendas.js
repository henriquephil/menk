import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import './Vendas.css'
import Dashboard from './Dashboard/Dashboard';
import Orcamentos from './Orcamentos/Orcamentos';

class Vendas extends Component {
    render() {
      return (
        <Router>
            <div className="Vendas">
                <Switch>
                    <Route path="/vendas/orcamentos" component={Orcamentos}/>
                    <Route path="/vendas" component={Dashboard}/>
                    <Redirect to="/vendas"/>
                </Switch>
            </div>
        </Router>
      );
    }
  }
  
  export default Vendas;