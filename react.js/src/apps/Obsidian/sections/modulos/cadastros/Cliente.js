import React, { Component } from 'react';
import FlexView from 'react-flexview';
import TitledPage from '../../../components/TitledPage';
import PaperSection from '../../../components/PaperSection';
import ClienteService from '../../../services/ClienteService';

class Cliente extends Component {
    
    constructor(props) {
        super(props);
        this.clienteService = new ClienteService()
        this.state = {
            cliente: {}
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.orcamentoService.get(this.props.match.params.id).then(res => {
            this.setState({
                orcamento: res.data
            });
        })
    }

    handleChange(field) {
        return (e) => {
            let change = {};
            change[field] = e.target.value;
            this.setState(change);
            console.log(this.state);
        };
    }

    salvar() {
        this.clienteService.post(this.state.cliente);
    }

    render() {
        return (
            <TitledPage title={this.props.match.params.id === 'novo' ? "Novo cliente" : "Editando cliente"}>
                <PaperSection>
                    <FlexView grow>
                        <FlexView basis={500} column hAlignContent='left' className="form-input">
                            <label>Nome</label>
                            <input type="text"/>
                        </FlexView>
                        <FlexView basis={200} column hAlignContent='left' className="form-input">
                            <label>Data de nascimento</label>
                            <input type="date"/>
                        </FlexView>
                        <FlexView basis={200} column hAlignContent='left' className="form-input">
                            <label>Sexo</label>
                            <select>
                                <option>Masculino</option>
                                <option>Feminino</option>
                            </select>
                        </FlexView>
                        <FlexView grow />
                        <FlexView basis={100} column hAlignContent='left' className="form-input">
                            <label>ID</label>
                            <input type="text" readOnly/>
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