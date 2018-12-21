import React, { Component } from 'react';
import {Link} from "react-router-dom";
import DefaultCrudService from '../../../services/DefaultCrudService';
import TitledPage from '../../../components/TitledPage';
import GenericPageableList from '../../../components/GenericPageableList';
import pencil from 'resources/pencil.svg'

class EstoqueLocais extends Component {
    
    constructor(props) {
        super(props);
        this.edit = this.edit.bind(this);
        this.service = new DefaultCrudService('/estoque-local');
        this.columns = [
            {
                key: 'descricao',
                descricao: 'Descrição',
                align: 'left'
            }
        ];
        this.recordActions = [
            {
                srcImg: pencil,
                alt: 'Editar',
                onClick: this.edit
            }
        ]
    }

    edit(localEstoque) {
        this.props.history.push(`/cadastros/estoque-local/${localEstoque.id}`)
    }

    render() {
        return (
            <TitledPage title="Locais de estoque">
                <GenericPageableList service={this.service} recordActions={this.recordActions} columns={this.columns}>
                    <Link to="/cadastros/estoque-local" className="default primary">Novo</Link>
                </GenericPageableList>
            </TitledPage>
        );
    }
}

export default EstoqueLocais;