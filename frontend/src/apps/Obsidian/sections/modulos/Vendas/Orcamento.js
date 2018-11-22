import React, { Component } from 'react';
import FlexView from 'react-flexview';
import OrcamentoService from '../../../services/OrcamentoService';
import TitledPage from '../../../components/TitledPage';
import QueryTextInput from '../../../components/QueryTextInput';
import PaperSection from '../../../components/PaperSection';

class OrcamentoForm extends Component {
    
    constructor(props) {
        super(props);
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
                <PaperSection>
                    <FlexView grow>
                        <FlexView basis='500' column hAlignContent='left' className="form-input">
                            <label>Cliente</label>
                            <QueryTextInput />
                        </FlexView>
                        <FlexView grow />
                        <FlexView basis={200} column hAlignContent='left' className="form-input">
                            <label>Status</label>
                            <input type="text"/>
                        </FlexView>
                        <FlexView basis={100} column hAlignContent='left' className="form-input">
                            <label>ID</label>
                            <input type="text"/>
                        </FlexView>
                    </FlexView>
                </PaperSection>
                <PaperSection>
                    <FlexView grow>
                        <FlexView basis='50%' column hAlignContent='left' className="form-input">
                            <label>Cliente</label>
                            <input type="text"/>
                        </FlexView>
                        <FlexView grow />
                        <FlexView basis='20%' column hAlignContent='left' className="form-input">
                            <label>Status</label>
                            <input type="text"/>
                        </FlexView>
                        <FlexView basis='10%'column hAlignContent='left' className="form-input">
                            <label>ID</label>
                            <input type="text"/>
                        </FlexView>
                    </FlexView>
                </PaperSection>
                <PaperSection>
                    <FlexView grow>
                        <FlexView grow={5} column hAlignContent='left' className="form-input">
                            <label>Cliente</label>
                            <input type="text"/>
                        </FlexView>
                        <FlexView grow />
                        <FlexView grow={2} column hAlignContent='left' className="form-input">
                            <label>Status</label>
                            <input type="text"/>
                        </FlexView>
                        <FlexView grow={1} column hAlignContent='left' className="form-input">
                            <label>ID</label>
                            <input type="text"/>
                        </FlexView>
                    </FlexView>
                </PaperSection>
            </TitledPage>
        );
    }
}

export default OrcamentoForm;