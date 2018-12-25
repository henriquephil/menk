import React, { Component } from 'react';
import FlexView from 'react-flexview';
import './CondicaoPagamentoParcela.css';
import times from 'resources/times.svg';

/**
 * props: {
 *  index: number,
 *  value: parcela,
 *  onChange: function(index, parcela),
 *  onRemove: function(index)
 * }
 */
class CondicaoPagamentoParcela extends Component {
    
    constructor(props) {
        super(props);
        this.state = this.props.value;
        this.handleChange = this.handleChange.bind(this);
        this.remover = this.remover.bind(this);
    }

    handleChange(field) {
        return (e) => {
            let change = {};
            change[field] = e.target.value;
            this.setState(change, () => this.props.onChange(this.props.index, this.state));
        };
    }

    remover() {
        this.props.onRemove(this.props.index);
    }

    render() {
        return (
            <FlexView className="CondicaoPagamentoParcela">
                <FlexView shrink column hAlignContent='left' className="form-input">
                    <span className="CondicaoPagamentoParcela--index">#{this.props.index + 1}</span>
                </FlexView>
                <FlexView basis="100" column hAlignContent='left' className="form-input">
                    <label>Dias</label>
                    <input type="number" step="1" min="0" value={this.state.dias} onChange={this.handleChange('dias')}/>
                </FlexView>
                <FlexView basis="100" column hAlignContent='left' className="form-input">
                    <label>Fração</label>
                    <input type="number" step=".01" min="0" max="1" value={this.state.fracao} onChange={this.handleChange('fracao')}/>
                </FlexView>
                <FlexView shrink column hAlignContent='left' className="form-input">
                    <img src={times} alt="Remover" className="CondicaoPagamentoParcela--action" onClick={this.remover}/>
                </FlexView>
            </FlexView>
        );
    }

}

export default CondicaoPagamentoParcela;