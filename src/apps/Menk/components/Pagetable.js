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
                                    <input type="button" value="Página anterior" onClick={this.props.controls.previousPage}/>
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
        if(!page || !page.content) {
            return this.renderNoData();
        }
        const dataRows = page.content.map((record, index) => this.renderRow(record, index, this.props.children));
        const emptyRows = [...Array(this.props.pageSize - page.content.length)].map((val, index) => <tr key={index} className="Pagetable--empty-row"><td colSpan={this.props.children.length}></td></tr>);
        return [dataRows, emptyRows];
    }

    renderRow(record, rowIndex, children) {
        const row = children.map((header, index) => <td key={index} style={this.tdStyle(header.props)}>{header.props.resolve ? header.props.resolve(record) : record[header.key]}</td>);

        const actions = <td className="Pagetable--tableActions">{this.props.actions.map((action, index) => <img key={index} src={action.srcImg} alt={action.alt} onClick={() => action.onClick(record)}></img>)}</td>;
        return <tr key={rowIndex}>{row}{actions}</tr>;
    }

    renderNoData() {
        return <tr><td colSpan={this.props.children.length} style={{textAlign: 'center'}}>Loading</td></tr>;
    }

    tdStyle(thStyle) {
        return {...thStyle, ...{textAlign: thStyle.align}};
    }
}
  
export default Pagetable;
