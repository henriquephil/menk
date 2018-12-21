import React, { Component } from 'react';
import PaperSection from '../../../components/PaperSection';
import GenericDashboard from '../../../components/GenericDashboard';

class Dashboard extends Component {
    render() {
        const menuItens = [
            {to:'/cadastros/clientes', name: 'Clientes'},
            {to:'/cadastros/produtos', name: 'Produtos'},
            {to:'/cadastros/estoque-locais', name: 'Locais de estoque'},
            {to:'/cadastros/fornecedores', name: 'Fornecedores'},
            {to:'/cadastros/condicoes-pagamento', name: 'Condições de pagamento'},
            {to:'/cadastros/conta-bancaria', name: 'Conta bancária'}
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