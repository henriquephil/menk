import React, { Component } from 'react';
import update from 'immutability-helper';
import FlexView from 'react-flexview';
import Toggle from 'react-toggle';
import TitledPage from '../../../components/TitledPage';
import PaperSection from '../../../components/PaperSection';
import DefaultCrudService from '../../../services/DefaultCrudService';
import EntidadePessoaJuridica from './EntidadePessoaJuridica';
import EntidadePessoaFisica from './EntidadePessoaFisica';
import EntidadeEndereco from './EntidadeEndereco';

class Entidade extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            ativo: true,
            endereco: {}
        };
        this.service = new DefaultCrudService('/entidade');
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeTipoPessoa = this.handleChangeTipoPessoa.bind(this);
        this.handleSet = this.handleSet.bind(this);
        this.salvar = this.salvar.bind(this);
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        if(id) {
            this.service.get(id).then(res => {
                this.setState(res.data);
            })
        }
    }

    handleChange(field) {
        return (e) => {
            let change = {};
            change[field] = e.target.value;
            this.setState(change);
        };
    }

    handleChangeTipoPessoa(e) {
        this.setState({
            tipoPessoa: e.target.value,
            dadosPessoa: {}
        });
    }

    handleSet(field) {
        return (data) => {
            let change = {};
            change[field] = data;
            this.setState(change);
        };
    }

    handlePapelChange(papel) {
        return (e) => {
            if (e.target.checked) {
                this.setState({
                    papeis: update(this.state.papeis, {$push: [papel]})
                });
            } else {
                const indexOf = this.state.papeis.indexOf(papel);
                this.setState({
                    papeis: update(this.state.papeis, {$splice: [[indexOf, 1]]})
                });
            }
        };
    }

    hasPapel(papel) {
        return this.state.papeis && this.state.papeis.includes(papel);
    }

    salvar() {
        this.service.save(this.state).then(res => this.props.history.push('/cadastros/entidades'));
    }

    render() {
        return (
            <TitledPage title={this.props.match.params.id ? "Editando entidade" : "Nova entidade"}>
                <PaperSection>
                    <FlexView grow>
                        <FlexView shrink column hAlignContent='left' className="form-input">
                            <label>Cliente</label>
                            <Toggle checked={this.hasPapel('CLIENTE')} onChange={this.handlePapelChange('CLIENTE')}/>
                        </FlexView>
                        <FlexView shrink column hAlignContent='left' className="form-input">
                            <label>Fornecedor</label>
                            <Toggle checked={this.hasPapel('FORNECEDOR')} onChange={this.handlePapelChange('FORNECEDOR')}/>
                        </FlexView>
                        <FlexView grow/>
                        <FlexView basis={120} column hAlignContent='left' className="form-input">
                            <label>Tipo</label>
                            <select value={this.state.tipoPessoa || ''} onChange={this.handleChangeTipoPessoa}>
                                <option></option>
                                <option value="FISICA">Física</option>
                                <option value="JURIDICA">Jurídica</option>
                            </select>
                        </FlexView>
                        <FlexView shrink column hAlignContent='left' className="form-input">
                            <label>Ativo</label>
                            <Toggle checked={this.state.ativo} onChange={this.handleChange('ativo')}/>
                        </FlexView>
                    </FlexView>
                </PaperSection>
                {this.renderPessoa()}
                <EntidadeEndereco value={this.state.endereco} onChange={this.handleSet('endereco')}/>
                <PaperSection>
                    <FlexView grow hAlignContent='right'>
                        <FlexView>
                            <button onClick={this.salvar} className="default primary">Salvar</button>
                        </FlexView>
                    </FlexView>
                </PaperSection>
            </TitledPage>
        );
    }

    renderPessoa() {
        switch (this.state.tipoPessoa) {
            case 'FISICA': 
                return <EntidadePessoaFisica value={this.state.dadosPessoa} onChange={this.handleSet('dadosPessoa')}/>;
            case 'JURIDICA': 
                return <EntidadePessoaJuridica value={this.state.dadosPessoa} onChange={this.handleSet('dadosPessoa')}/>;
            default:
                break;
        }
    }
}

export default Entidade;