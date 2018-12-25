import React, { Component } from 'react';
import FlexView from 'react-flexview';
import PaperSection from '../../../components/PaperSection';
import DateInput from '../../../components/DateInput';
import InputMask from 'react-input-mask';

/**
 * props: {
 *  value: pessoaFisica,
 *  onChange: function(pessoaFisica)
 * }
 */
class EntidadePessoaFisica extends Component {
    
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
            <PaperSection title="Dados pessoa física">
                <FlexView grow>
                    <FlexView grow column hAlignContent='left' className="form-input">
                        <label>Nome</label>
                        <input value={this.state.nome || ''} onChange={this.handleChange('nome')}/>
                    </FlexView>
                    <FlexView basis={150} column hAlignContent='left' className="form-input">
                        <label>CPF</label>
                        <InputMask mask="999.999.999-99" value={this.state.cpf || ''} onChange={this.handleChange('cpf')}/>
                    </FlexView>
                    <FlexView basis={150} column hAlignContent='left' className="form-input">
                        <label>Data de nascimento</label>
                        <DateInput value={this.state.dataNascimento || ''} onChange={this.handleChange('dataNascimento')}/>
                    </FlexView>
                    <FlexView basis={120} column hAlignContent='left' className="form-input">
                        <label>Sexo</label>
                        <select value={this.state.sexo || ''} onChange={this.handleChange('sexo')}>
                            <option></option>
                            <option value="MASCULINO">Masculino</option>
                            <option value="FEMININO">Feminino</option>
                        </select>
                    </FlexView>
                </FlexView>
            </PaperSection>
        );
    }
}

export default EntidadePessoaFisica;