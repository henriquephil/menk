import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './Obsidian.css'
import Menu from './sections/Menu/Menu';
import Content from './sections/Content/Content'
import Footer from './sections/Footer/Footer';

class Tectite extends Component {
    render() {
      return (
        <Router>
            <div className="Tectite">
                <Menu></Menu>
                <Content></Content>
                <Footer></Footer>
            </div>
        </Router>
      );
    }
  }
  
  export default Tectite;