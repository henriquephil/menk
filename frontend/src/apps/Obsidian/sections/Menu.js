import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './Menu.css';

class Menu extends Component {
    render() {
      return (
        <div className="Menu">
          <div className="Modulos">
            <NavLink to="/cadastros" className="Modulo" activeClassName="ModuloActive">Cadastros</NavLink>
            <NavLink to="/compras" className="Modulo" activeClassName="ModuloActive">Compras</NavLink>
            <NavLink to="/vendas" className="Modulo" activeClassName="ModuloActive">Vendas</NavLink>
            <NavLink to="/financeiro" className="Modulo" activeClassName="ModuloActive">Financeiro</NavLink>
            <NavLink to="/estoque" className="Modulo" activeClassName="ModuloActive">Estoque</NavLink>
          </div>
        </div>
      );
    }
  }
  
  export default Menu;