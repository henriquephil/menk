import React, { Component } from 'react';
import './Login.css';
import FlexView from 'react-flexview/lib';
import { withRouter } from "react-router-dom";
import AuthService from '../services/AuthService';

class Login extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            username: 'admin@menk',
            password: '123'
        };
        this.authService = new AuthService();
        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);
        this.teste = this.teste.bind(this);
    }

    handleChange(field) {
        return (e) => {
            let change = {};
            change[field] = e.target.value;
            this.setState(change);
        };
    }

    login() {
        this.authService.getAccessToken(this.state)
                .then(res => {
                    this.props.history.push("/");
                })
    }

    teste() {
        this.authService.teste();
    }

    render() {
      return (
        <div className="Login">
            <div className="Login--title">Login</div>
            <FlexView column hAlignContent='left' className="form-input full-width">
                <label>Usuário</label>
                <input type="text" value={this.state.username} onChange={this.handleChange('username')}/>
            </FlexView>
            <FlexView column hAlignContent='left' className="form-input full-width">
                <label>Senha</label>
                <input type="text" value={this.state.password} onChange={this.handleChange('password')}/>
            </FlexView>
            <FlexView column hAlignContent='left' className="form-input full-width">
                <button onClick={this.login} className="default primary full-width">Entrar</button>
            </FlexView>
        </div>
      );
    }
  }
  
  export default withRouter(Login);