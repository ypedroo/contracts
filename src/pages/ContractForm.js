import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container } from '../styles/styles';
// import { submitContract } from '../store/actions/'
import Dropzone from 'react-dropzone'
import Header from '../components/Header';
class ContractForm extends Component {
    
    render() {
        return (
            <Container>
                <Header />
                <div className="ContractForm" alt="ContractForm">
                    <h1> Contracts </h1>
                    <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                        {({ getRootProps, getInputProps }) => (
                            <section className="ContractDropZone">
                                <div {...getRootProps()}>
                                    <input  {...getInputProps()} />
                                    <p>
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
    bindActionCreators({ submitForm }, dispatch);

export default connect(mapDispatchToProps)(ContractForm);