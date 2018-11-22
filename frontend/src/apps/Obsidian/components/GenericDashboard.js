import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './GenericDashboard.css';
import FlexView from 'react-flexview/lib';
import Paper from './Paper';

class GenericDashboard extends Component {
    render() {
      return (
        <FlexView grow>
            <FlexView basis="25%" column hAlignContent='left' className="GenericDashboard--column">
                {this.props.menuItens.map(item => <Link to={item.to} className="menu-item">{item.name}</Link>)}
            </FlexView>
            <FlexView basis="50%" column hAlignContent='center' className="GenericDashboard--column">
                <Paper>
                    {this.props.children}
                </Paper>
            </FlexView>
            <FlexView basis="25%" column hAlignContent='right' className="GenericDashboard--column">
                {this.props.reportItens.map(item => <Link to={item.to} className="report-item">{item.name}</Link>)}
            </FlexView>
        </FlexView>
      );
    }
  }
  
  export default GenericDashboard;