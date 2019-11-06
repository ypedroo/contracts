import React, { Component } from 'react';
import { Container } from '../styles/styles';
import Dropzone from 'react-dropzone'
import Header from '../components/Header';

export default class ContractForm extends Component {
    render() {
        return (
            <Container>
                <Header />
                <div className="ContractForm" alt="ContractForm">
                    <h1> Contracts </h1>
                    <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
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
