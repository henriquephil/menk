import React, { Component } from 'react';
import {Link} from "react-router-dom";
import GenericCrudService from '../../../services/GenericCrudService';
import TitledPage from '../../../components/TitledPage';
import GenericPageableList from '../../../components/GenericPageableList';
import pencil from 'resources/pencil.svg'

class Clientes extends Component {
    
    constructor(props) {
        super(props);
        this.edit = this.edit.bind(this);
        this.clienteService = new GenericCrudService('/cliente');
        this.headers = [
            {
                key: 'nome',
                descricao: 'Nome',
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

    edit(cliente) {
        this.props.history.push(`/cadastros/cliente/${cliente._id}`)
    }

    render() {
        return (
            <TitledPage title="Clientes">
                <GenericPageableList service={this.clienteService} recordActions={this.recordActions} headers={this.headers}>
                    <Link to="/cadastros/cliente" className="default primary">Novo</Link>
                </GenericPageableList>
            </TitledPage>
        );
    }
}

export default Clientes;