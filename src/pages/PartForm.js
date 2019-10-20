import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { submitForm } from '../store/actions/partsActions';
import Header from '../components/Header';
import styled from 'styled-components';

const Container = styled.form`
margin: 8px;
width: 100%;
text-align: center;
display: inline-block;
`
const Button = styled.div`
cursor: pointer;
    background: transparent;
    display: inline;
    font-size: 14px;
    border-radius: 3px;
    color: #101010;
    border: 2px solid grey;
    margin: 0 1em;
    margin-top: 10px;
    padding: 0.25em 1em;
    transition: 0.5s all ease-out;
    &:hover {
        background-color: skyblue;
        color: white;
}

`

class PartForm extends Component {

    handleSubmit = values => {
        this.props.submitForm(values);
    }
    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;
        return (
            <form onSubmit={handleSubmit(this.handleSubmit)}>
                <Container>
                    <div>
                        <Header />
                    </div>
                    <div className="PartForm">
                        <label>First Name</label>
                        <div>
                            <Field
                                name="name"
                                component="input"
                                className="inputField"
                                type="text"
                                placeholder="First Name"
                            />
                        </div>
                    </div>
                    <div>
                        <label>Last Name</label>
                        <div>
                            <Field
                                name="lastName"
                                className="inputField"
                                component="input"
                                type="text"
                                placeholder="Last Name"
                            />
                        </div>
                    </div>
                    <div>
                        <label>Email</label>
                        <div>
                            <Field
                                name="email"
                                className="inputField"
                                component="input"
                                type="text"
                                placeholder="Email"
                            />
                        </div>
                    </div>
                    <div>
                        <label>Cpf</label>
                        <div>
                            <Field
                                name="cpf"
                                component="input"
                                className="inputField"
                                type="number"
                                placeholder="CPF"
                            />
                        </div>
                    </div>
                    <div>
                        <label>Phone</label>
                        <div>
                            <Field
                                name="phone"
                                component="input"
                                type="number"
                                className="inputField"
                                placeholder="Phone"
                            />
                        </div>
                    </div>
                    <div>
                        <Button type="submit" disabled={pristine || submitting}>
                            Submit
            </Button>
                        <Button type="button" disabled={pristine || submitting} onClick={reset}>
                            Clear Values
            </Button>
                    </div>
                </Container>
            </form>

        )
    }

}

const mapDispatchToProps = dispatch =>
    bindActionCreators({ submitForm }, dispatch);


PartForm = reduxForm({
    form: 'partForm',
})(PartForm);

export default PartForm = connect(
    null,
    mapDispatchToProps
)(PartForm);

