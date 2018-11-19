import React, { Component } from 'react';
import './TitledPage.css';

class TitledPage extends Component {

    render() {
        return (
            <div className="TitledPage">
                <div className="TitledPage--title">
                    {this.props.title}
                </div>
                <div className="TitledPage--children">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
  
export default TitledPage;