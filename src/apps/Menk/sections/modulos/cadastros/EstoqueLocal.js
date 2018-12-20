import React, { Component } from 'react';
import FlexView from 'react-flexview';
import TitledPage from '../../../components/TitledPage';
import PaperSection from '../../../components/PaperSection';
import DefaultCrudService from '../../../services/DefaultCrudService';

class EstoqueLocal extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            descricao: ''
        };
        this.service = new DefaultCrudService('/estoque-local');
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
        this.service.save(this.state).then(res => this.props.history.push('/cadastros/estoque-locais'));
    }

    render() {
        return (
            <TitledPage title={this.props.match.params.id ? "Editando local de estoque" : "Novo local de estoque"}>
                <PaperSection>
                    <FlexView grow>
                        <FlexView grow column hAlignContent='left' className="form-input">
                            <label>Descrição</label>
                            <input type="text" value={this.state.descricao || ''} onChange={this.handleChange('descricao')}/>
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

export default EstoqueLocal;