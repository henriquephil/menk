import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './OrcamentoList.css';
import OrcamentoService from '../../../services/OrcamentoService';
import TitledPage from '../../../components/TitledPage';
import Pagetable from '../../../components/Pagetable';
import pencil from 'resources/pencil.svg'
import times from 'resources/times.svg'

class OrcamentoList extends Component {
    
    constructor(props) {
        super(props);
        this.orcamentoService = new OrcamentoService()
        this.state = {
            page: {},
            search: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.fetchPage = this.fetchPage.bind(this);
        this.editOrcamento = this.editOrcamento.bind(this);
    }

    componentDidMount() {
        this.fetchPage(1, 20);
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

    previousPage() {
        this.fetchPage(this.state.page.index - 1, 20);
    }

    nextPage() {
        this.fetchPage(this.state.page.index + 1, 20);
    }

    fetchPage(page, size) {
        this.setState({page: {}});
        this.orcamentoService.fetchPage(page, size).then(res => this.setState({page: res.data}));
    }

    render() {
        let actions = [
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
        return (
            <TitledPage title="Orçamentos">
                <div className="Form">
                    <div className="Tablespace">
                        <Pagetable page={this.state.page} actions={actions} controls={this} pageSize={20}>
                            <th key="id" width="100px" align="right">ID</th>
                            <th key="descricao" align="left">Descrição</th>
                        </Pagetable>
                    </div>
                    <div className="Options">
                        <div className="OptionsSearch">
                            <input type="text" className="subtle" value={this.state.search} onChange={this.handleChange('search')} placeholder="Busca"/>
                        </div>
                        <Link to="/vendas/orcamento/novo" className="default primary">Novo</Link>
                    </div>
                </div>
            </TitledPage>
        );
    }
}

export default OrcamentoList;