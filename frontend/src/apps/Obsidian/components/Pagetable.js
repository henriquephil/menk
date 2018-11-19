import React, { Component } from 'react';
import './Pagetable.css';

class Pagetable extends Component {
    
    render() {
        const bodyHeight = this.props.pageSize * 32 + 2;
        return (
            <div className="Pagetable">
                <table>
                    <thead>
                        <tr>
                            {this.props.children}
                        </tr>
                    </thead>
                    <tbody style={{height: bodyHeight}}>
                        {this.renderBody(this.props.page)}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={this.props.children.length}>
                                <div className="Pagetable--footer">
                                    <input type="button" value="Próxima página" onClick={this.props.controls.previousPage} className=""/>
                                    <input type="button" value="Próxima página" onClick={this.props.controls.nextPage}/>
                                </div>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        );
    }

    renderBody(page) {
        if(!page || !page.data) {
            return this.renderNoData();
        }
        return page.data.map(record => this.renderRow(record, this.props.children));
    }

    renderRow(record, children) {
        const keyProp = children[0].key;
        const trKey = record[keyProp];
        const row = children.map(header => <td key={trKey+header.key} style={this.tdStyle(header.props)}>{record[header.key]}</td>);

        const actions = <td className="Pagetable--tableActions">{this.props.actions.map(action => <img key={action.alt} src={action.srcImg} alt={action.alt} onClick={() => action.onClick(record)}></img>)}</td>;
        return <tr key={trKey}>{row}{actions}</tr>;
    }

    renderNoData() {
        return <tr><td colSpan={this.props.children.length}>Nada disponível</td></tr>;
    }

    tdStyle(thStyle) {
        return {...thStyle, ...{textAlign: thStyle.align}};
    }
}
  
export default Pagetable;
