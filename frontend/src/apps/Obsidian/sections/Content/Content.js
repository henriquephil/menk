import React, { Component } from 'react';
import { Route, Redirect, Switch } from "react-router-dom";
import './Content.css';
import Container from '../../../../components/Container/Container';
import Compras from './modulos/Compras/Compras';
import Vendas from './modulos/Vendas/Vendas';
import Home from './modulos/Home/Home';

class Content extends Component {
    render() {
      return (
        <div className="Content">
          <Container>
            <Switch>
              <Route path="/compras" component={Compras}/>
              <Route path="/vendas" component={Vendas}/>
              <Route path="/" component={Home}/>
              <Redirect to="/"/>
            </Switch>
          </Container>
        </div>
      );
    }
  }
  
  export default Content;