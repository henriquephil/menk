import React, { Component } from 'react';
import './QueryTextInput.css';
import FlexView from 'react-flexview/lib';

class QueryTextInput extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            data: null
        };
        this.onKeyDown = this.onKeyDown.bind(this);
        this.doSearch = this.doSearch.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onKeyDown(e) {
        if(e.keyCode === 81 && e.altKey) {
            this.doSearch(e);
        }
    }

    doSearch(e) {
        console.log(e);
    }

    onChange(e) {
        this.setState({
            id: e.value,
            data: null
        });
        this.props.onChange && this.props.onChange(e);
    }

    render() {
        return (
            <FlexView className="QueryTextInput">
                <FlexView basis={120}><input onChange={this.onChange} onKeyDown={this.onKeyDown}/></FlexView>
                <button className="do-search" onClick={this.doSearch} tabIndex="-1">Q</button>
                <FlexView grow><span>{(this.state.data || {})[this.props.display]}</span></FlexView>
            </FlexView>
        );
    }
}
  
export default QueryTextInput;
