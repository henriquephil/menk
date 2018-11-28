import React, { Component } from 'react';
import './PaperSection.css';

class PaperSection extends Component {

    render() {
        return (
            <div className="PaperSection">
                {this.props.children}
            </div>
        );
    }
}
  
export default PaperSection;