import React, { Component } from 'react';
import './PaperSection.css';

class PaperSection extends Component {

    render() {
        return (
            <div className="PaperSection">
                <div className="PaperSection--title">
                    {this.props.title}
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
  
export default PaperSection;