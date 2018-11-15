import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './Orcamentos.css';
import OrcamentoService from '../../../../../services/OrcamentoService';
import TitledPage from '../../../../../components/TitledPage/TitledPage';
import Pagetable from '../../../../../components/Pagetable/Pagetable';


class Orcamentos extends Component {
    
    constructor(props) {
        super(props);
        this.orcamentoService = new OrcamentoService()
        this.state = {
            data: []
        };
    }

    render() {
        let headers = [
            { name: "ID", attribute: "id", minWidth: '40px', width: '100px', align: 'right' },
            { name: "Descrição", attribute: "descricao", minWidth: '300px' }
        ];
        return (
            <TitledPage title="Orçamentos">
                <div className="List">
                    <Pagetable headers={headers} promise={this.orcamentoService.fetchAll()} className="Pagetable"></Pagetable>
                    <div className="Options">
                        <Link to="/vendas/orcamento/novo">Novo</Link>
                    </div>
                </div>
            </TitledPage>
        );
    }
}

export default Orcamentos;