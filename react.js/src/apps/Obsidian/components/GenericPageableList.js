import React, { Component } from 'react';
import './GenericPageableList.css';
import Pagetable from './Pagetable';

class GenericPageableList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            page: {},
            search: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.fetchPage = this.fetchPage.bind(this);

        this.service = this.props.service;
    }

    componentDidMount() {
        this.fetchPage(1, 20);
    }

    handleChange(field) {
        return (e) => {
            let change = {};
            change[field] = e.target.value;
            this.setState(change);
        };
    }

    previousPage() {
        this.fetchPage(this.state.page.index - 1, 20);
    }

    nextPage() {
        this.fetchPage(this.state.page.index + 1, 20);
    }

    fetchPage(page, size) {
        this.setState({page: {}});
        this.service.fetchPage(page, size).then(res => {
            console.info(res.data);
            this.setState({page: res.data});
        });
    }

    render() {
        return (
            <div className="GenericPageableList">
                <div className="GenericPageableList--table">
                    <Pagetable page={this.state.page} actions={this.props.recordActions} controls={this} pageSize={20}>
                        {this.props.headers.map((th) => <th key={th.key} width={th.width} align={th.align}>{th.descricao}</th>)}
                    </Pagetable>
                </div>
                <div className="GenericPageableList--side">
                    <div className="GenericPageableList--search">
                        <input type="text" className="subtle" value={this.state.search} onChange={this.handleChange('search')} placeholder="Busca"/>
                    </div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default GenericPageableList;