import React, { Component } from 'react';
import FlexView from 'react-flexview';
import './Footer.css';
import Container from '../../../components/Container/Container';
import Icon from 'react-simple-icons'

class Footer extends Component {
    render() {
      return (
        <div className="Footer">
            <Container>
                <FlexView column className="full-width">
                    <FlexView grow hAlignContent="center" vAlignContent="center">
                        <span className="Footer--title Footer--capital">M</span>
                        <span className="Footer--title">enk</span>
                    </FlexView>
                    <FlexView grow vAlignContent="center">
                        <a href="https://github.com/henriquephil/menk" target="_blank" rel="noopener noreferrer" className="Footer--link"><Icon name='github' size="1.2em"/>github.com/henriquephil/menk</a>
                    </FlexView>
                </FlexView>
            </Container>
        </div>
      );
    }
  }
  
  export default Footer;