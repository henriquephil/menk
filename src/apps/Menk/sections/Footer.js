import React, { Component } from 'react';
import FlexView from 'react-flexview';
import { withRouter } from "react-router-dom";
import './Footer.css';
import Container from '../../../components/Container/Container';
import Icon from 'react-simple-icons'
import TokenService from '../../../services/TokenService';

class Footer extends Component {

    constructor(props) {
        super(props);
        this.tokenService = new TokenService();
        this.logout = this.logout.bind(this);
    }

    logout() {
        localStorage.removeItem("Authorization");
        this.props.history.push("/landing");
    }

    render() {
      return (
        <div className="Footer">
            <Container>
                <FlexView column className="full-width">
                    <FlexView grow hAlignContent="center" vAlignContent="center">
                        <span className="Footer--title Footer--capital">M</span>
                        <span className="Footer--title">enk</span>
                    </FlexView>
                    <FlexView>
                        <FlexView column hAlignContent="left" grow>
                            <FlexView vAlignContent="center">
                                <Icon name='github' size="1.5em" className="Footer--git-icon"/>
                                <FlexView column>
                                    <a href="https://github.com/henriquephil/menk-frontend-react.js" target="_blank" rel="noopener noreferrer" className="Footer--link">github.com/henriquephil/menk-frontend-react.js</a>
                                    <a href="https://github.com/henriquephil/menk-backend-Spring" target="_blank" rel="noopener noreferrer" className="Footer--link">github.com/henriquephil/menk-backend-Spring</a>
                                </FlexView>
                            </FlexView>
                        </FlexView>
                        <FlexView column hAlignContent="right">
                            <div>Usuário</div>
                            <button onClick={this.logout} className="Footer--link">Sair</button>
                        </FlexView>
                    </FlexView>
                </FlexView>
            </Container>
        </div>
      );
    }
  }
  
  export default withRouter(Footer);