import React, { Component } from 'react';
import FlexView from 'react-flexview';
import PaperSection from '../../../components/PaperSection';
import InputMask from 'react-input-mask';

/**
 * props: {
 *  value: endereco,
 *  onChange: function(endereco)
 * }
 */
class EntidadeEndereco extends Component {
    
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
            <PaperSection title="Endereço">
                <FlexView grow>
                    <FlexView basis={50} column hAlignContent='left' className="form-input">
                        <label>País</label>
                        <input type="text" maxLength="2" autoCapitalize="true" value={this.state.pais || ''} onChange={this.handleChange('pais')}/>
                    </FlexView>
                    <FlexView basis={70} column hAlignContent='left' className="form-input">
                        <label>Estado</label>
                        <input type="text" maxLength="2" autoCapitalize="true" value={this.state.estado || ''} onChange={this.handleChange('estado')}/>
                    </FlexView>
                    <FlexView basis={250} column hAlignContent='left' className="form-input">
                        <label>Cidade</label>
                        <input type="text" value={this.state.cidade || ''} onChange={this.handleChange('cidade')}/>
                    </FlexView>
                    <FlexView basis={100} column hAlignContent='left' className="form-input">
                        <label>CEP</label>
                        <InputMask mask="99999-999" value={this.state.cep || ''} onChange={this.handleChange('cep')}/>
                    </FlexView>
                    <FlexView basis={250} column hAlignContent='left' className="form-input">
                        <label>Bairro</label>
                        <input type="text" value={this.state.bairro || ''} onChange={this.handleChange('bairro')}/>
                    </FlexView>
                    <FlexView grow column hAlignContent='left' className="form-input">
                        <label>Endereço completo</label>
                        <input type="text" value={this.state.endereco || ''} onChange={this.handleChange('endereco')}/>
                    </FlexView>
                </FlexView>
            </PaperSection>
        );
    }
}

export default EntidadeEndereco;