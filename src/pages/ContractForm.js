import React, { Component } from 'react';
import { Container } from '../styles/styles';
import Header from '../components/Header';

export default class ContractForm extends Component {
    render() {
        return (
            <Container>
                <Header />
                <div className="ContractForm" alt="ContractForm">
                    <h1> Contracts </h1>
                </div>
                
            </Container>

        );
    }
}
