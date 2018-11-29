import React, { Component } from 'react';
import {Link} from "react-router-dom";
import ClienteService from '../../../services/ClienteService';
import TitledPage from '../../../components/TitledPage';
import GenericPageableList from '../../../components/GenericPageableList';
import pencil from 'resources/pencil.svg'

class Clientes extends Component {
    
    constructor(props) {
        super(props);
        this.editCliente = this.editCliente.bind(this);
        this.clienteService = new ClienteService();
        this.headers = [
            {
                key: '_id',
                descricao: 'ID',
                width: '100px',
                align: 'right'
            },
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
                onClick: this.editCliente
            }
        ]
    }

    editCliente(cliente) {
        this.props.history.push(`/cadastros/cliente/${cliente.id}`)
    }

    render() {
        return (
            <TitledPage title="Clientes">
                <GenericPageableList service={this.clienteService} recordActions={this.recordActions} headers={this.headers}>
                    <Link to="/cadastros/cliente/novo" className="default primary">Novo</Link>
                </GenericPageableList>
            </TitledPage>
        );
    }
}

export default Clientes;