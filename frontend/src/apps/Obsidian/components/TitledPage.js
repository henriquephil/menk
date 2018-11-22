import React, { Component } from 'react';
import './TitledPage.css';
import Paper from './Paper';

class TitledPage extends Component {

    render() {
        return (
            <div className="TitledPage">
                <div className="TitledPage--title">
                    {this.props.title}
                </div>
                <Paper>
                    {this.props.children}
                </Paper>
            </div>
        );
    }
}
  
export default TitledPage;