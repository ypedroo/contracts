import React, { Component } from 'react';
import { Container } from '../styles/styles';
import Dropzone from 'react-dropzone'
import Header from '../components/Header';

export default class ContractForm extends Component {
    getContract = value => console.log('got it', value);
    render() {
        return (
            <Container>
                <Header />
                <div className="ContractForm" alt="ContractForm">
                    <h1> Contracts </h1>
                    <Dropzone className="ContractDropZone"onDrop={acceptedFiles => this.getContract(acceptedFiles)}>
                        {({ getRootProps, getInputProps }) => (
                            <section>
                                <div {...getRootProps()}>
                                    <input {...getInputProps()} />
                                    <p>drop the contract here, or click to select it</p>
                                </div>
                            </section>
                        )}
                    </Dropzone>
                </div>

            </Container>

        );
    }
}
