import React, { Component } from 'react';
import PaperSection from '../../../components/PaperSection';
import GenericDashboard from '../../../components/GenericDashboard';

class Dashboard extends Component {
    render() {
        const menuItens = [
            {to:'/cadastros/clientes', name: 'Clientes'},
            {to:'/produtos', name: 'Produtos'},
            {to:'/fornecedores', name: 'Fornecedores'},
            {to:'/formas-pagamento', name: 'Formas de pagamentos'},
            {to:'/conta-bancaria', name: 'Conta bancária'}
        ];
        const reportItens = [
            {to:'/relatorio-cliente', name: 'Relatório de clientes'},
            {to:'/relatorio-fornecedores', name: 'Relatório de fornecedores'}
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