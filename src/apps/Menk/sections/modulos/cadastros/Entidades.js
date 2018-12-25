import React, { Component } from 'react';
import {Link} from "react-router-dom";
import DefaultCrudService from '../../../services/DefaultCrudService';
import TitledPage from '../../../components/TitledPage';
import GenericPageableList from '../../../components/GenericPageableList';
import pencil from 'resources/pencil.svg'

class Entidades extends Component {
    
    constructor(props) {
        super(props);
        this.edit = this.edit.bind(this);
        this.service = new DefaultCrudService('/entidade');
        this.columns = [
            {
                key: 'nome',
                descricao: 'Nome',
                align: 'left',
                resolve: (entidade) => {
                    switch (entidade.tipoPessoa) {
                        case 'FISICA': return entidade.dadosPessoa.nome;
                        case 'JURIDICA': return entidade.dadosPessoa.nomeFantasia;
                        default: return '';
                    } 
                }
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

    edit(entidade) {
        this.props.history.push(`/cadastros/entidade/${entidade.id}`)
    }

    render() {
        return (
            <TitledPage title="Entidades">
                <GenericPageableList service={this.service} recordActions={this.recordActions} columns={this.columns}>
                    <Link to="/cadastros/entidade" className="default primary">Novo</Link>
                </GenericPageableList>
            </TitledPage>
        );
    }
}

export default Entidades;