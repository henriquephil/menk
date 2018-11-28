import React, { Component } from 'react';
import FlexView from 'react-flexview/lib';
import onClickOutside from 'react-onclickoutside'
import './QuickQueryDialog.css';

class QuickQueryDialog extends Component {
    initialState = {search: '', results: [], selected: null};

    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.inputRef = React.createRef();
        this.handleSearch = this.handleSearch.bind(this);
        this.globalKeyDown = this.globalKeyDown.bind(this);
    }

    componentWillReceiveProps(newProps) {
        if(newProps.visible) {
            this.setState(this.initialState);
            this.inputRef.current.focus();
        }
    }

    handleClickOutside() {
        if(this.props.visible) {
            this.props.hideMe();
        }
    }

    handleSearch(e) {
        this.setState({
                search: e.target.value
            });
        const results = [{id: 1, nome: 'Henrique'}, {id: 2, nome: 'Philippi'}];
        this.setState({
                results: results,
                selected: results[0]
            });
    }

    globalKeyDown(key) {
        switch(key.key) {
            case 'Escape':
                if(this.props.visible) {
                    this.props.hideMe();
                }
                break;
            case 'ArrowUp':
                if(this.props.visible) {
                    this.props.hideMe();
                }
                break;
            case 'ArrowDown':
                if(this.props.visible) {
                    this.props.hideMe();
                }
                break;
            case 'Enter':
                if(this.props.visible) {
                    this.props.onSelect(this.state.selected);
                }
                break;
            default:
        }
    }

    render() {
        return (
            <FlexView className={'QuickQueryDialog ' + (this.props.visible ? ' QuickQueryDialog--visible' : '')} column onKeyDown={this.globalKeyDown}>
                <input type="text" placeholder={this.props.placeholder} ref={this.inputRef} value={this.state.search} onChange={this.handleSearch} tabIndex="-1"/>
                <FlexView className="QuickQueryDialog--results" column hAlignContent="left">
                    {this.state.results.map(res => <span key={res[this.props.keyAttribute || 'id']} className="QuickQueryDialog--result">{res[this.props.displayAttribute]}</span>)}
                </FlexView>
            </FlexView>
        );
    }
}
  
export default onClickOutside(QuickQueryDialog);
