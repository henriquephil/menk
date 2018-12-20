import React, { Component } from 'react';
import './QueryTextInput.css';
import FlexView from 'react-flexview/lib';
import QuickQueryDialog from './QuickQueryDialog';

class QueryTextInput extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            display: '',
            data: {},
            showDialog: false
        };
        this.idInput = React.createRef();
        this.onKeyDown = this.onKeyDown.bind(this);
        this.doSearch = this.doSearch.bind(this);
        this.hideDialog = this.hideDialog.bind(this);
        this.handleChangeKey = this.handleChangeKey.bind(this);
        this.dialogReturn = this.dialogReturn.bind(this);
    }

    onKeyDown(e) {
        if(e.keyCode === 81 && e.altKey) {
            this.doSearch(e);
        }
    }

    doSearch(e) {
        this.setState({
            showDialog: true
        });
    }

    hideDialog() {
        this.setState({
            showDialog: false
        });
        this.idInput.current.focus();
    }

    handleChangeKey(e) {
        const val = isNaN(e.target.value) ? '' : e.target.value;
        this.change({
            id: val,
            display: '',
            data: {}
        });
    }

    dialogReturn(cliente) {
        this.change({
            id: cliente.id,
            display: cliente[this.props.display],
            data: cliente
        });
        this.hideDialog();
    }

    change(state) {
        this.setState(state);
        this.props.onChange && this.props.onChange(state);
    }

    render() {
        return (
            <FlexView className="QueryTextInput">
                <FlexView basis={100}>
                    <input value={this.state.id} onChange={this.handleChangeKey} onKeyDown={this.onKeyDown} className="QueryTextInput--id" ref={this.idInput}/>
                </FlexView>
                <button className="do-search" onClick={this.doSearch} tabIndex="-1">Q</button>
                <FlexView grow>
                    <input value={this.state.display} className="QueryTextInput--description" readOnly tabIndex="-1"/>
                </FlexView>
                <QuickQueryDialog placeholder="Nome" displayAttribute="nome" onSelect={this.dialogReturn} visible={this.state.showDialog} hideMe={this.hideDialog}></QuickQueryDialog>
            </FlexView>
        );
    }
}
  
export default QueryTextInput;
