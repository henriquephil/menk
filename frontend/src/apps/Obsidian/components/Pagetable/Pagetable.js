import React, { Component } from 'react';
import './Pagetable.css';

class Pagetable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            keyProp: props.keyProp || 'id',
            page: {data:[]}
        };
        props.promise.then(response => {
            console.log(response);
            if(response.data) {
                this.setState({
                    page: response.data
                });
            }
        });
    }

    render() {
        let head = this.props.headers.map(header => {
            return <td key={header.name} style={this.columnStyle(header)}>{header.name}</td>
        });
        let body = this.state.page.data.map(record => {
            const trKey = record[this.state.keyProp];
            const row = this.props.headers.map(header => <td key={trKey+header.attribute} style={this.columnStyle(header)}>{record[header.attribute]}</td>);
            return <tr key={trKey}>{row}</tr>;
        });
        return (
            <div className="Pagetable">
                <table className="Table">
                    <thead>
                        <tr>
                            {head}
                        </tr>
                    </thead>
                    <tbody>
                        {body}
                    </tbody>
                </table>
            </div>
        );
    }

    columnStyle(header) {
        return {
            width: header.width,
            minWidth: header.minWidth,
            textAlign: header.align
        };
    }

    renderBody(headers, keyProp) {
        return 
    }
}
  
export default Pagetable;