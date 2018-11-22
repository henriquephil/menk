import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import FlexView from 'react-flexview/lib';

class Dashboard extends Component {
    render() {
      return (
        <div className="Dashboard">
            <FlexView grow>
                <FlexView basis="25%" column hAlignContent='left' className="Dashboard--column">
                    <Link to="/cadastros/clientes" className="menu-item">Clientes</Link>
                    <Link to="/cadastros/clientes" className="menu-item">Produtos</Link>
                    <Link to="/cadastros/clientes" className="menu-item">Fornecedores</Link>
                    <Link to="/cadastros/clientes" className="menu-item">Formas de pagamentos</Link>
                    <Link to="/cadastros/clientes" className="menu-item">Conta bancária</Link>
                </FlexView>
                <FlexView basis="50%" column hAlignContent='center' className="Dashboard--column">
                    Dashboard
                    <Link to="/cadastros/clientes" className="menu-item">Conta bancária</Link>
                </FlexView>
                <FlexView basis="25%" column hAlignContent='right' className="Dashboard--column">
                    Relatórios
                    <Link to="/cadastros/clientes" className="menu-item">Conta bancária</Link>
                </FlexView>
            </FlexView>
        </div>
      );
    }
  }
  
  export default Dashboard;