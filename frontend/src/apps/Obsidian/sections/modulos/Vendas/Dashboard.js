import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

class Dashboard extends Component {
    render() {
      return (
        <div className="Dashboard">
            <Link to="/vendas/orcamentos" className="default">Orçamentos</Link>
        </div>
      );
    }
  }
  
  export default Dashboard;