import React, { Component } from 'react';
import {Link} from "react-router-dom";
import TitledPage from '../../../components/TitledPage';
import GenericPageableList from '../../../components/GenericPageableList';
import pencil from 'resources/pencil.svg'
import DefaultCrudService from '../../../services/DefaultCrudService';

class CondicoesPagamento extends Component {
    
    constructor(props) {
        super(props);
        this.edit = this.edit.bind(this);
        this.service = new DefaultCrudService('/condicao-pagamento');
        this.columns = [
            {
                key: 'descricao',
                descricao: 'Descrição',
                align: 'left'
            },
            // {
            //     key: 'parcelas',
            //     descricao: 'Quantidade de parcelas',
            //     align: 'right'
            // }
        ];
        this.recordActions = [
            {
                srcImg: pencil,
                alt: 'Editar',
                onClick: this.edit
            }
        ]
    }

    edit(condicaoPagamento) {
        this.props.history.push(`/cadastros/condicao-pagamento/${condicaoPagamento.id}`)
    }

    render() {
        return (
            <TitledPage title="Condições de pagamento">
                <GenericPageableList service={this.service} recordActions={this.recordActions} columns={this.columns}>
                    <Link to="/cadastros/condicao-pagamento" className="default primary">Novo</Link>
                </GenericPageableList>
            </TitledPage>
        );
    }
}

export default CondicoesPagamento;