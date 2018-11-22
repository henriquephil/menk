import React, { Component } from 'react';
import PaperSection from '../../../components/PaperSection';
import GenericDashboard from '../../../components/GenericDashboard';

class Dashboard extends Component {
    render() {
        const menuItens = [
            {to:'/cadastros/clientes', name: 'Clientes'},
            {to:'/cadastros', name: 'Produtos'},
            {to:'/cadastros', name: 'Fornecedores'},
            {to:'/cadastros', name: 'Formas de pagamentos'},
            {to:'/cadastros', name: 'Conta bancária'}
        ];
        const reportItens = [
            {to:'/cadastros', name: 'Relatório de clientes'},
            {to:'/cadastros', name: 'Relatório de fornecedores'}
        ];
        return (
            <GenericDashboard menuItens={menuItens} reportItens={reportItens}>
                <PaperSection>
                    Dashboard 1
                </PaperSection>
                <PaperSection>
                    Dashboard 2
                </PaperSection>
                <PaperSection>
                    Dashboard 3
                </PaperSection>
            </GenericDashboard>
      );
    }
  }
  
  export default Dashboard;