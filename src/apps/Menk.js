import React, { Component } from 'react';
import './Menk.css'
import Menu from './Menk/sections/Menu';
import Content from './Menk/sections/Content'
import Footer from './Menk/sections/Footer';

class Menk extends Component {

    render() {
      return (
        <div className="Menk">
            <Menu/>
            <Content location={this.props.location}/>
            <Footer/>
        </div>
      );
    }
  }
  
  export default Menk;