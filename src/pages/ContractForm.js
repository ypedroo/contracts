import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container } from '../styles/styles';
import { submitContract } from '../store/actions/contractActions';
import Dropzone from 'react-dropzone'
import Header from '../components/Header';

class ContractForm extends Component {
    getContract = value => {
        console.log('send it')
        this.props.submitContract(value);
    }
    render() {
        return (
            <Container>
                <Header />
                <div className="ContractForm" alt="ContractForm">
                    <h1> Contracts </h1>
                    <Dropzone onDrop={acceptedFiles => this.getContract(acceptedFiles)}>
                        {({ getRootProps, getInputProps }) => (
                            <section className="ContractDropZone">
                                <div {...getRootProps()}>
                                    <input {...getInputProps()} />
                                    <p className="ContractDropZone">
                                        drop the contract here, or click to select it
                                    </p>
                                </div>
                            </section>
                        )}
                    </Dropzone>
                </div>
            </Container>
        );
    }

}

const mapDispatchToProps = dispatch =>
    bindActionCreators({ submitContract }, dispatch);


export default ContractForm = connect(mapDispatchToProps)(ContractForm);
