import React, { Component } from 'react';
import { Route, Redirect, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './Content.css';
import Container from '../../../components/Container/Container';
import Cadastros from './modulos/Cadastros';
import Compras from './modulos/Compras';
import Vendas from './modulos/Vendas';
import Home from './modulos/Home';

class Content extends Component {
    render() {
      return (
        <div className="Content">
            <Container>
                <TransitionGroup className="full-width">
                    <CSSTransition key={this.props.location.key} classNames="Content--ct" timeout={400}>
                        <Switch location={this.props.location}>
                            <Route path="/cadastros" component={Cadastros}/>
                            <Route path="/compras" component={Compras}/>
                            <Route path="/vendas" component={Vendas}/>
                            <Route path="/" component={Home}/>
                            <Redirect to="/"/>
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            </Container>
        </div>
      );
    }
  }
  
  export default Content;