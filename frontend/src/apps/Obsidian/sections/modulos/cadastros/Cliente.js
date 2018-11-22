import React, { Component } from 'react';
import FlexView from 'react-flexview';
import OrcamentoService from '../../../services/OrcamentoService';
import TitledPage from '../../../components/TitledPage';

class Cliente extends Component {
    
    constructor(props) {
        super(props);
        this.orcamentoService = new OrcamentoService()
        this.state = {
            orcamento: {
                cliente: {}
            }
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

    render() {
        return (
            <TitledPage title={this.props.match.params.id === 'novo' ? "Novo cliente" : "Editando cliente"}>
                <div className="obsidian-form">
                    <div className="of-section">
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
                            <FlexView basis={120} column hAlignContent='left' className="form-input">
                                <label>ID</label>
                                <input type="text" readOnly/>
                            </FlexView>
                        </FlexView>
                    </div>
                    <div className="of-section">
                        <FlexView grow hAlignContent='right'>
                            <FlexView>
                                <button onClick={this.invativar} className="default danger">Inativar</button>
                            </FlexView>
                            <FlexView>
                                <button onClick={this.salvar} className="default primary">Salvar</button>
                            </FlexView>
                        </FlexView>
                    </div>
                </div>
            </TitledPage>
        );
    }
}

export default Cliente;