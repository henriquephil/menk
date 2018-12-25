import React, { Component } from 'react';
import { Route, Redirect, Switch } from "react-router-dom";
import './Cadastros.css'
import Dashboard from './cadastros/Dashboard';
import Produtos from './cadastros/Produtos';
import EstoqueLocais from './cadastros/EstoqueLocais';
import EstoqueLocal from './cadastros/EstoqueLocal';
import Produto from './cadastros/Produto';
import CondicaoPagamento from './cadastros/CondicaoPagamento';
import CondicoesPagamento from './cadastros/CondicoesPagamento';
import Entidades from './cadastros/Entidades';
import Entidade from './cadastros/Entidade';

class Cadastros extends Component {
    render() {
      return (
        <div className="Cadastros">
            <Switch>
                <Route path={`${this.props.match.path}/entidades`} component={Entidades}/>
                <Route path={`${this.props.match.path}/entidade/:id?`} component={Entidade}/>
                <Route path={`${this.props.match.path}/estoque-locais`} component={EstoqueLocais}/>
                <Route path={`${this.props.match.path}/estoque-local/:id?`} component={EstoqueLocal}/>
                <Route path={`${this.props.match.path}/produtos`} component={Produtos}/>
                <Route path={`${this.props.match.path}/produto/:id?`} component={Produto}/>
                <Route path={`${this.props.match.path}/condicoes-pagamento`} component={CondicoesPagamento}/>
                <Route path={`${this.props.match.path}/condicao-pagamento/:id?`} component={CondicaoPagamento}/>
                <Route path={`${this.props.match.path}`} component={Dashboard}/>
                <Redirect to={`${this.props.match.path}`}/>
            </Switch>
        </div>
      );
    }
  }
  
  export default Cadastros;
  