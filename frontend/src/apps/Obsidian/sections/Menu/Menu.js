import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Menu.css';

class Menu extends Component {
    render() {
      return (
        <div className="Menu">
          <div className="Modulos">
            <Link to="/compras" className="Modulo ModuloCompras">Compras</Link>
            <Link to="/vendas" className="Modulo ModuloVendas">Vendas</Link>
            <Link to="/financeiro" className="Modulo ModuloFinanceiro">Financeiro</Link>
            <Link to="/estoque" className="Modulo ModuloEstoque">Estoque</Link>
          </div>
        </div>
      );
    }
  }
  
  export default Menu;