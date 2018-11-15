import React, { Component } from 'react';
import './TitledPage.css';

class TitledPage extends Component {
    render() {
        return (
            <div className="TitledPage">
                <div className="Title">{this.props.title}</div>
                {this.props.children}
            </div>
        );
    }
}
  
export default TitledPage;