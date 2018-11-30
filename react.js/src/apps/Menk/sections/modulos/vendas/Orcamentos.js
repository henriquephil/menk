import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './Orcamentos.css';
import OrcamentoService from '../../../services/OrcamentoService';
import TitledPage from '../../../components/TitledPage';
import pencil from 'resources/pencil.svg'
import times from 'resources/times.svg'
import GenericPageableList from '../../../components/GenericPageableList';

class Orcamentos extends Component {
    
    constructor(props) {
        super(props);
        this.editOrcamento = this.editOrcamento.bind(this);
        this.orcamentoService = new OrcamentoService();
        this.headers = [
            {
                key: 'id',
                descricao: 'ID',
                width: '100px',
                align: 'right'
            },
            {
                key: 'descricao',
                descricao: 'Descrição',
                align: 'left'
            }
        ];
        this.recordActions = [
            {
                srcImg: times,
                alt: 'Remover',
                onClick: this.removeOrcamento
            },
            {
                srcImg: pencil,
                alt: 'Editar',
                onClick: this.editOrcamento
            }
        ]
    }

    handleChange(field) {
        return (e) => {
            let change = {};
            change[field] = e.target.value;
            this.setState(change);
        };
    }

    editOrcamento(orcamento) {
        this.props.history.push(`/vendas/orcamento/${orcamento.id}`)
    }

    render() {
        return (
            <TitledPage title="Orçamentos">
                <GenericPageableList service={this.orcamentoService} recordActions={this.recordActions} headers={this.headers}>
                    <Link to="/vendas/orcamento" className="default primary">Novo</Link>
                </GenericPageableList>
            </TitledPage>
        );
    }
}

export default Orcamentos;