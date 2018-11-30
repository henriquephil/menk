import React, { Component } from 'react';
import {Link} from "react-router-dom";
import TitledPage from '../../../components/TitledPage';
import GenericPageableList from '../../../components/GenericPageableList';
import pencil from 'resources/pencil.svg'
import GenericCrudService from '../../../services/GenericCrudService';

class Produtos extends Component {
    
    constructor(props) {
        super(props);
        this.edit = this.edit.bind(this);
        this.produtoService = new GenericCrudService('/produto');
        this.headers = [
            {
                key: 'descricao',
                descricao: 'Descrição',
                align: 'left'
            },
            {
                key: 'precoVenda',
                descricao: 'Preço de venda',
                align: 'right'
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

    edit(produto) {
        this.props.history.push(`/cadastros/produto/${produto.id}`)
    }

    render() {
        return (
            <TitledPage title="Produtos">
                <GenericPageableList service={this.produtoService} recordActions={this.recordActions} headers={this.headers}>
                    <Link to="/cadastros/produto" className="default primary">Novo</Link>
                </GenericPageableList>
            </TitledPage>
        );
    }
}

export default Produtos;