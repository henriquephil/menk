import React, { Component } from 'react';
import FlexView from 'react-flexview';
import TitledPage from '../../../components/TitledPage';
import PaperSection from '../../../components/PaperSection';
import DefaultCrudService from '../../../services/DefaultCrudService';
import DateInput from '../../../components/DateInput';
import InputMask from 'react-input-mask';

class Cliente extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            ativo: true
        };
        this.clienteService = new DefaultCrudService('/cliente');
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeTipo = this.handleChangeTipo.bind(this);
        this.salvar = this.salvar.bind(this);
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        if(id) {
            this.clienteService.get(id).then(res => {
                const cliente = res.data;
                this.setState({
                    _id: cliente._id,
                    ativo: cliente.ativo,
                    nome: cliente.nome,
                    tipo: cliente.tipo,
                    fisicaCpf: cliente.fisica.cpj,
                    fisicaDataNascimento: cliente.fisica.dataNascimento,
                    fisicaSexo: cliente.fisica.sexo,
                    juridicaCnpj: cliente.juridica.cnpj,
                    juridicaInscricaoEstadual: cliente.juridica.inscricaoEstadual,
                    enderecoPais: cliente.endereco.pais,
                    enderecoEstado: cliente.endereco.estado,
                    enderecoCidade: cliente.endereco.cidade,
                    enderecoCep: cliente.endereco.cep,
                    enderecoBairro: cliente.endereco.bairro,
                    enderecoEndereco: cliente.endereco.endereco,
                    createdAt: cliente.createdAt
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

    handleChangeTipo(e) {
        let tipo = e.target.value;
        this.setState({tipo: tipo});
        switch (tipo) {
            case 'FISICA':
                this.setState({
                    juridicaCnpj: null,
                    juridicaInscricaoEstadual: null,
                    fisicaSexo: null
                });
                break;
            case 'JURIDICA':
                this.setState({
                    fisicaCpf: null,
                    fisicaDataNascimento: null
                });
                break;
            default:
                break;
        }
    }
    
    salvar() {
        const cliente = {
            _id: this.state._id,
            ativo: this.state.ativo,
            nome: this.state.nome,
            tipo: this.state.tipo,
            fisica: {
                cpf: this.state.fisicaCpf,
                dataNascimento: this.state.fisicaDataNascimento,
                sexo: this.state.fisicaSexo,
            },
            juridica: {
                cnpj: this.state.juridicaCnpj,
                inscricaoEstadual: this.state.juridicaInscricaoEstadual
            },
            endereco: {
                pais: this.state.enderecoPais,
                estado: this.state.enderecoEstado,
                cidade: this.state.enderecoCidade,
                cep: this.state.enderecoCep,
                bairro: this.state.enderecoBairro,
                endereco: this.state.enderecoEndereco
            },
            createdAt: this.state.createdAt
        };
        this.clienteService.save(cliente).then(res => this.props.history.push('/cadastros/clientes'));
    }

    render() {
        return (
            <TitledPage title={this.props.match.params.id ? "Editando cliente" : "Novo cliente"}>
                <PaperSection>
                    <FlexView grow>
                        <FlexView grow column hAlignContent='left' className="form-input">
                            <label>Nome</label>
                            <input type="text" value={this.state.nome || ''} onChange={this.handleChange('nome')}/>
                        </FlexView>
                        <FlexView basis={120} column hAlignContent='left' className="form-input">
                            <label>Tipo</label>
                            <select value={this.state.tipo || ''} onChange={this.handleChangeTipo}>
                                <option></option>
                                <option value="FISICA">Física</option>
                                <option value="JURIDICA">Jurídica</option>
                            </select>
                        </FlexView>
                    </FlexView>
                </PaperSection>
                {this.renderPessoa()}
                <PaperSection title="Endereço">
                    <FlexView grow>
                        <FlexView basis={50} column hAlignContent='left' className="form-input">
                            <label>País</label>
                            <input type="text" maxLength="2" autoCapitalize="true" value={this.state.enderecoPais || ''} onChange={this.handleChange('enderecoPais')}/>
                        </FlexView>
                        <FlexView basis={70} column hAlignContent='left' className="form-input">
                            <label>Estado</label>
                            <input type="text" maxLength="2" autoCapitalize="true" value={this.state.enderecoEstado || ''} onChange={this.handleChange('enderecoEstado')}/>
                        </FlexView>
                        <FlexView basis={250} column hAlignContent='left' className="form-input">
                            <label>Cidade</label>
                            <input type="text" value={this.state.enderecoCidade || ''} onChange={this.handleChange('enderecoCidade')}/>
                        </FlexView>
                        <FlexView basis={100} column hAlignContent='left' className="form-input">
                            <label>CEP</label>
                            <InputMask mask="99999-999" value={this.state.enderecoCep || ''} onChange={this.handleChange('enderecoCep')}/>
                        </FlexView>
                        <FlexView basis={250} column hAlignContent='left' className="form-input">
                            <label>Bairro</label>
                            <input type="text" value={this.state.enderecoBairro || ''} onChange={this.handleChange('enderecoBairro')}/>
                        </FlexView>
                        <FlexView grow column hAlignContent='left' className="form-input">
                            <label>Endereço completo</label>
                            <input type="text" value={this.state.enderecoEndereco || ''} onChange={this.handleChange('enderecoEndereco')}/>
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

    renderPessoa() {
        switch (this.state.tipo) {
            case 'FISICA': 
                return (
                    <PaperSection title="Dados pessoa física">
                        <FlexView grow>
                            <FlexView basis={150} column hAlignContent='left' className="form-input">
                                <label>CPF</label>
                                <InputMask mask="999.999.999-99" value={this.state.fisicaCpf || ''} onChange={this.handleChange('fisicaCpf')}></InputMask>
                            </FlexView>
                            <FlexView basis={150} column hAlignContent='left' className="form-input">
                                <label>Data de nascimento</label>
                                <DateInput value={this.state.fisicaFataNascimento || ''} onChange={this.handleChange('fisicaDataNascimento')}></DateInput>
                            </FlexView>
                            <FlexView basis={120} column hAlignContent='left' className="form-input">
                                <label>Sexo</label>
                                <select value={this.state.fisicaSexo || ''} onChange={this.handleChange('fisicaSexo')}>
                                    <option></option>
                                    <option value="MASCULINO">Masculino</option>
                                    <option value="FEMININO">Feminino</option>
                                </select>
                            </FlexView>
                        </FlexView>
                    </PaperSection>
                );
            case 'JURIDICA': 
                return (
                    <PaperSection title="Dados pessoa jurídica">
                        <FlexView grow>
                            <FlexView basis={150} column hAlignContent='left' className="form-input">
                                <label>CNPJ</label>
                                <InputMask mask="99.999.999/9999-99" value={this.state.juridicaCnpj || ''} onChange={this.handleChange('juridicaCnpj')}></InputMask>
                            </FlexView>
                            <FlexView basis={150} column hAlignContent='left' className="form-input">
                                <label>Inscrição estadual</label>
                                <input value={this.state.juridicaInscricaoEstadual || ''} onChange={this.handleChange('juridicaInscricaoEstadual')}></input>
                            </FlexView>
                        </FlexView>
                    </PaperSection>
                );
            default:
                break;
        }
    }
}

export default Cliente;