import React, { Component } from 'react';
import './OrcamentoForm.css';
import OrcamentoService from '../../../services/OrcamentoService';
import TitledPage from '../../../components/TitledPage';

class OrcamentoForm extends Component {
    
    constructor(props) {
        super(props);
        console.log(props);
        this.orcamentoService = new OrcamentoService()
        this.state = {
            orcamento: {
                cliente: {}
            }
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.orcamentoService.get(this.props.match.params.id).then(res => {
            this.setState({
                orcamento: res.data
            });
        })
    }

    handleChange(field) {
        return (e) => {
            let change = {};
            change[field] = e.target.value;
            this.setState(change);
            console.log(this.state);
        };
    }

    render() {
        return (
            <TitledPage title={this.props.match.params.id === 'novo' ? "Novo orçamento" : "Editando orçamento"}>
                <div>
                    <div className="OrcamentoForm--section">
                    </div>
                    <div className="OrcamentoForm--section">
                    </div>
                </div>
            </TitledPage>
        );
    }
}

export default OrcamentoForm;