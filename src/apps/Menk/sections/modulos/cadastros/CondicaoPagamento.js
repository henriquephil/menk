import React, { Component } from 'react';
import update from 'immutability-helper';
import FlexView from 'react-flexview';
import TitledPage from '../../../components/TitledPage';
import PaperSection from '../../../components/PaperSection';
import DefaultCrudService from '../../../services/DefaultCrudService';

class CondicaoPagamento extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            parcelas: []
        };
        this.service = new DefaultCrudService('/condicao-pagamento');
        this.handleChange = this.handleChange.bind(this);
        this.salvar = this.salvar.bind(this);
        this.adicionarParcela = this.adicionarParcela.bind(this);
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

    handleParcelaChange(index, field) {
        return (e) => {
            let change = {};
            change[field] = {$set: e.target.value};
            const val = {};
            val[index] = {$set: update(this.state.parcelas[index], change)};
            this.setState({
                parcelas: update(this.state.parcelas, val)
            });
        };
    }

    salvar() {
        this.service.save(this.state).then(res => this.props.history.push('/cadastros/condicoes-pagamento'));
    }

    adicionarParcela() {
        const newParcela = {dias: 0, fracao: 0};
        this.setState({
            parcelas: update(this.state.parcelas, {$push: [newParcela]})
        });
    }

    render() {
        console.log(this.state);
        return (
            <TitledPage title={this.props.match.params.id ? "Editando condição de pagamento" : "Nova condição de pagamento"}>
                <PaperSection>
                    <FlexView grow>
                        <FlexView basis="500" column hAlignContent='left' className="form-input">
                            <label>Descrição</label>
                            <input type="text" value={this.state.descricao || ''} onChange={this.handleChange('descricao')}/>
                        </FlexView>
                    </FlexView>
                </PaperSection>
                <PaperSection title="Parcelas">
                    <FlexView grow>
                        <FlexView shrink column hAlignContent='left' className="form-input">
                            {this.state.parcelas.map((parcela, index) => this.renderParcela(parcela, index))}
                            <FlexView>
                                <button onClick={this.adicionarParcela}>Adicionar parcela</button>
                            </FlexView>
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

    renderParcela(parcela, index) {
        return (
            <FlexView>
                <FlexView shrink column hAlignContent='left' className="form-input">
                    <span className="CondicaoPagamento--parcela-index">#{index + 1}</span>
                </FlexView>
                <FlexView basis="100" column hAlignContent='left' className="form-input">
                    <label>Dias</label>
                    <input type="number" step="1" value={this.state.parcelas[index].dias || ''} onChange={this.handleParcelaChange(index, 'dias')}/>
                </FlexView>
                <FlexView basis="100" column hAlignContent='left' className="form-input">
                    <label>Fração</label>
                    <input type="number" step=".01" min="0" max="1" value={this.state.parcelas[index].fracao || ''} onChange={this.handleParcelaChange(index, 'fracao')}/>
                </FlexView>
            </FlexView>
        );
    }
}

export default CondicaoPagamento;