import React, { Component } from 'react';
import FlexView from 'react-flexview';
import TitledPage from '../../../components/TitledPage';
import PaperSection from '../../../components/PaperSection';
import GenericCrudService from '../../../services/GenericCrudService';
import DateInput from '../../../components/DateInput';

class Cliente extends Component {
    
    constructor(props) {
        super(props);
        this.clienteService = new GenericCrudService('/cliente');
        this.state = {
            _id: '',
            nome: '',
            dataNascimento: '   ',
            sexo: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.salvar = this.salvar.bind(this);
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        if(id) {
            this.clienteService.get(id).then(res => {
                const cliente = res.data;
                console.log(cliente);
                this.setState({
                    _id: cliente._id,
                    nome: cliente.nome,
                    dataNascimento: cliente.dataNascimento,
                    sexo: cliente.sexo
                });
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

    salvar() {
        if (this.state.id) {
            this.clienteService.put(this.state.id, this.state).then(console.log);
        } else {
            this.clienteService.post(this.state).then(console.log);
        }
    }

    render() {
        return (
            <TitledPage title={this.props.match.params.id ? "Editando cliente" : "Novo cliente"}>
                <PaperSection>
                    <FlexView grow>
                        <FlexView grow column hAlignContent='left' className="form-input">
                            <label>Nome</label>
                            <input type="text" value={this.state.nome} onChange={this.handleChange('nome')}/>
                        </FlexView>
                        <FlexView basis={200} column hAlignContent='left' className="form-input">
                            <label>Data de nascimento</label>
                            <DateInput value={this.state.dataNascimento} onChange={this.handleChange('dataNascimento')}></DateInput>
                        </FlexView>
                        <FlexView basis={200} column hAlignContent='left' className="form-input">
                            <label>Sexo</label>
                            <select value={this.state.sexo} onChange={this.handleChange('sexo')}>
                                <option></option>
                                <option value="MASCULINO">Masculino</option>
                                <option value="FEMININO">Feminino</option>
                            </select>
                        </FlexView>
                    </FlexView>
                </PaperSection>
                <PaperSection>
                    <FlexView grow hAlignContent='right'>
                        <FlexView>
                            <button onClick={this.invativar} className="default danger">Inativar</button>
                        </FlexView>
                        <FlexView>
                            <button onClick={this.salvar} className="default primary">Salvar</button>
                        </FlexView>
                    </FlexView>
                </PaperSection>
            </TitledPage>
        );
    }
}

export default Cliente;