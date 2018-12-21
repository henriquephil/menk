import React, { Component } from 'react';
import { Route, Redirect, Switch } from "react-router-dom";
import './Cadastros.css'
import Dashboard from './cadastros/Dashboard';
import Clientes from './cadastros/Clientes';
import Cliente from './cadastros/Cliente';
import Produtos from './cadastros/Produtos';
import EstoqueLocais from './cadastros/EstoqueLocais';
import EstoqueLocal from './cadastros/EstoqueLocal';
import Produto from './cadastros/Produto';
import CondicaoPagamento from './cadastros/CondicaoPagamento';
import CondicoesPagamento from './cadastros/CondicoesPagamento';

class Cadastros extends Component {
    render() {
      return (
        <div className="Cadastros">
            <Switch>
                <Route path={`${this.props.match.path}/clientes`} component={Clientes}/>
                <Route path={`${this.props.match.path}/cliente/:id?`} component={Cliente}/>
                <Route path={`${this.props.match.path}/estoque-locais`} component={EstoqueLocais}/>
                <Route path={`${this.props.match.path}/estoque-local/:id?`} component={EstoqueLocal}/>
                <Route path={`${this.props.match.path}/produtos`} component={Produtos}/>
                <Route path={`${this.props.match.path}/produto/:id?`} component={Produto}/>
                <Route path={`${this.props.match.path}/condicao-pagamento`} component={CondicaoPagamento}/>
                <Route path={`${this.props.match.path}/condicoes-pagamento/:id?`} component={CondicoesPagamento}/>
                <Route path={`${this.props.match.path}`} component={Dashboard}/>
                <Redirect to={`${this.props.match.path}`}/>
            </Switch>
        </div>
      );
    }
  }
  
  export default Cadastros;
  