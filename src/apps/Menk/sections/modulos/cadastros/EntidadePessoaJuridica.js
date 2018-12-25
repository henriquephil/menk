import React, { Component } from 'react';
import FlexView from 'react-flexview';
import PaperSection from '../../../components/PaperSection';
import InputMask from 'react-input-mask';

/**
 * props: {
 *  value: pessoaJuridica,
 *  onChange: function(pessoaJuridica)
 * }
 */
class EntidadePessoaJuridica extends Component {
    
    constructor(props) {
        super(props);
        this.state = this.props.value;
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(field) {
        return (e) => {
            let change = {};
            change[field] = e.target.value;
            this.setState(change, () => this.props.onChange(this.state));
        };
    }

    render() {
        return (
            <PaperSection title="Dados pessoa jurídica">
                <FlexView grow>
                    <FlexView grow column hAlignContent='left' className="form-input">
                        <label>Nome fantasia</label>
                        <input value={this.state.nomeFantasia || ''} onChange={this.handleChange('nomeFantasia')}/>
                    </FlexView>
                    <FlexView grow column hAlignContent='left' className="form-input">
                        <label>Razão social</label>
                        <input value={this.state.razaoSocial || ''} onChange={this.handleChange('razaoSocial')}/>
                    </FlexView>
                    <FlexView basis={150} column hAlignContent='left' className="form-input">
                        <label>CNPJ</label>
                        <InputMask mask="99.999.999/9999-99" value={this.state.cnpj || ''} onChange={this.handleChange('cnpj')}/>
                    </FlexView>
                    <FlexView basis={150} column hAlignContent='left' className="form-input">
                        <label>Inscrição estadual</label>
                        <input value={this.state.inscricaoEstadual || ''} onChange={this.handleChange('inscricaoEstadual')}/>
                    </FlexView>
                </FlexView>
            </PaperSection>
        );
    }
}

export default EntidadePessoaJuridica;