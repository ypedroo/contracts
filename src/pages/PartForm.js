import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { submitForm } from '../store/actions/partsActions';
import Header from '../components/Header';
import { Container } from '../styles/styles';
class PartForm extends Component {

    handleSubmit = values => {
        this.props.submitForm(values);
    }

    email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address ;-;' : undefined;

    cpf = value => value && /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}))$/.test(value) ? 'Invalid CPF' : undefined;


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
            <Container>
                <form onSubmit={handleSubmit(this.handleSubmit)}>
                    <div>
                        <Header />
                    </div>
                    <div className="PartForm">
                        <div>
                            <Field
                                name="name"
                                component={this.renderField}
                                className="inputField"
                                type="text"
                            />
                        </div>
                        <label>First Name</label>
                    </div>
                    <div>
                        <div>
                            <Field
                                name="lastName"
                                className="inputField"
                                component={this.renderField}
                                type="text"
                            />
                        </div>
                        <label>Last Name</label>
                    </div>
                    <div>
                        <div>
                            <Field
                                name="email"
                                className="inputField"
                                component={this.renderField}
                                type="text"
                                validate={this.email}
                            />
                            <label>Email</label>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Field
                                name="cpf"
                                component={this.renderField}
                                className="inputField"
                                type="text"
                                validate={this.cpf}
                            />
                            <label>CPF</label>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Field
                                name="phone"
                                component={this.renderField}
                                type="number"
                                className="inputField"
                            />
                            <label>Phone</label>
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
                </form>
            </Container>

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

