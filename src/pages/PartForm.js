import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { submitForm } from '../store/actions/partsActions';
import Header from '../components/Header';
import styled from 'styled-components';

const Container = styled.div`
margin-top: 18px;
width: 100%;
text-align: center;
display: inline-block;
`
const button = styled.div`
cursor: pointer;
    background: transparent;
    display: inline;
    font-size: 13px;
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

const Label = styled.label`
font-weight:  bold;
font-size: 16px;
text-shadow: -1px;
color: #101010;
`

class PartForm extends Component {

    handleSubmit = values => {
        this.props.submitForm(values);
    }

    email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined;

    cpf = value => value && /(\d{3})(\d{3})(\d{3})(\d{2})/.test(value) ? 'Invalid CPF': undefined;


    renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
        <div>
            <label>{label}</label>
            <div>
                <input {...input} placeholder={label} type={type} />
                {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
            </div>
        </div>
    );

    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;
        return (
            <form onSubmit={handleSubmit(this.handleSubmit)}>
                <Container>
                    <div>
                        <Header />
                    </div>
                    <div className="PartForm">
                        <Label>First Name</Label>
                        <div>
                            <Field
                                name="name"
                                component={this.renderField}
                                className="inputField"
                                type="text"
                            />
                        </div>
                    </div>
                    <div>
                        <Label>Last Name</Label>
                        <div>
                            <Field
                                name="lastName"
                                className="inputField"
                                component={this.renderField}
                                type="text"
                            />
                        </div>
                    </div>
                    <div>
                        <Label>Email</Label>
                        <div>
                            <Field
                                name="email"
                                className="inputField"
                                component={this.renderField}
                                type="text"
                                validate={this.email}
                            />
                        </div>
                    </div>
                    <div>
                        <Label>CPF</Label>
                        <div>
                            <Field
                                name="cpf"
                                component={this.renderField}
                                className="inputField"
                                type="number"
                                validate={this.cpf}
                            />
                        </div>
                    </div>
                    <div>
                        <Label>Phone</Label>
                        <div>
                            <Field
                                name="phone"
                                component={this.renderField}
                                type="number"
                                className="inputField"
                            />
                        </div>
                    </div>
                    <div>
                        <button type="submit" disabled={pristine || submitting}>
                            Submit
            </button>
                        <button type="button" disabled={pristine || submitting} onClick={reset}>
                            Clear Values
            </button>
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

