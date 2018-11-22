import React, { Component } from 'react';
import GenericDashboard from '../../../components/GenericDashboard';
import PaperSection from '../../../components/PaperSection';

class Dashboard extends Component {
    render() {
        const menuItens = [
            {to:'/vendas/orcamentos', name: 'Orçamentos'},
            {to:'/vendas', name: 'Vendas'},
            {to:'/vendas', name: 'Notas fiscais'}
        ];
        const reportItens = [
            {to:'/vendas', name: 'Faturamento'},
            {to:'/vendas', name: 'Relatório de vendas'},
            {to:'/vendas', name: 'Relatório de notas fiscais'}
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