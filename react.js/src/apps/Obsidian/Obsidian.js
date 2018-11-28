import React, { Component } from 'react';
import './Obsidian.css'
import Menu from './sections/Menu';
import Content from './sections/Content'
import Footer from './sections/Footer';

class Tectite extends Component {
    render() {
      return (
        <div className="Tectite">
            <Menu></Menu>
            <Content location={this.props.location}></Content>
            <Footer></Footer>
        </div>
      );
    }
  }
  
  export default Tectite;