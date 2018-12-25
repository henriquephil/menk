import React, { Component } from 'react';
import FlexView from 'react-flexview';
import Toggle from 'react-toggle';
import TitledPage from '../../../components/TitledPage';
import PaperSection from '../../../components/PaperSection';
import DefaultCrudService from '../../../services/DefaultCrudService';

class Produto extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            ativo: true
        };
        this.service = new DefaultCrudService('/produto');
        this.handleChange = this.handleChange.bind(this);
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

    salvar() {
        this.service.save(this.state).then(res => this.props.history.push('/cadastros/produtos'));
    }

    render() {
        return (
            <TitledPage title={this.props.match.params.id ? "Editando produto" : "Novo produto"}>
                <PaperSection>
                    <FlexView grow>
                        <FlexView grow column hAlignContent='left' className="form-input">
                            <label>Descrição</label>
                            <input type="text" value={this.state.descricao || ''} onChange={this.handleChange('descricao')}/>
                        </FlexView>
                        <FlexView shrink column hAlignContent='left' className="form-input">
                            <label>Ativo</label>
                            <Toggle defaultChecked={this.state.ativo} onChange={this.handleChange('ativo')}/>
                        </FlexView>
                    </FlexView>
                    <FlexView grow>
                        <FlexView basis="200" column hAlignContent='left' className="form-input">
                            <label>GTIN</label>
                            <input type="text" value={this.state.gtin || ''} onChange={this.handleChange('gtin')}/>
                        </FlexView>
                        <FlexView basis="100" column hAlignContent='left' className="form-input">
                            <label>NCM</label>
                            <input type="text" value={this.state.ncm || ''} onChange={this.handleChange('ncm')}/>
                        </FlexView>
                        <FlexView basis="150" column hAlignContent='left' className="form-input">
                            <label>Unidade de medida</label>
                            <input type="text" value={this.state.unidadeMedida || ''} onChange={this.handleChange('unidadeMedida')}/>
                        </FlexView>
                        <FlexView grow/>
                        <FlexView basis="200" column hAlignContent='left' className="form-input">
                            <label>Valor unitário</label>
                            <input type="number" step=".01" value={this.state.valorUnitario || ''} onChange={this.handleChange('valorUnitario')}/>
                        </FlexView>
                    </FlexView>
                </PaperSection>
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
}

export default Produto;