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
                    <FlexView vAlignContent="center">
                        <Icon name='github' size="1.5em" className="Footer--git-icon"/>
                        <FlexView column>
                            <a href="https://github.com/henriquephil/menk-frontend-react.js" target="_blank" rel="noopener noreferrer" className="Footer--link">github.com/henriquephil/menk-frontend-react.js</a>
                            <a href="https://github.com/henriquephil/menk-backend-Spring" target="_blank" rel="noopener noreferrer" className="Footer--link">github.com/henriquephil/menk-backend-Spring</a>
                        </FlexView>
                    </FlexView>
                </FlexView>
            </Container>
        </div>
      );
    }
  }
  
  export default Footer;