import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { submitForm } from '../store/actions/partsActions';
import { Container } from '../styles/styles';
import Swal from 'sweetalert2';
import Header from '../components/Header';
class PartForm extends Component {

    handleSubmit = values => {
        this.props.submitForm(values);
        this.showAlert();
    }

    showAlert = () => {
        const { part } = this.props
        part ? this.successAlert() : this.failAlert();
    }

    successAlert = () => {
        Swal.fire({
            title: 'Hey you registered the part.',
            text: "You can register more or just go home.",
            type: 'success',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Take me home!',
            cancelButtonText: 'I want to keep doing this.',
        }).then((result) => {
            if (result.value) {
                this.props.history.push('/')
            }
        })
    }

    failAlert = () => {
        Swal.fire({
            title: 'Hey something went wrong :C',
            text: "And this maybe our fault...",
            type: 'warning',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Oh jeez men let me try again',
            backdrop: `
            rgba(0,0,123,0.4)
            url("/images/nyan-cat.gif")
            center left
            no-repeat
            `
        })
    }

    required = value => value ? undefined : 'Required';

    email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined;

    cpf = value => value && /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}))$/.test(value) ? 'Invalid CPF' : undefined;

    phone = value => value && !/^(0|[1-9][0-9]{9})$/i.test(value)
        ? 'Invalid phone number, must be at least 10 digits'
        : undefined


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
                        <label>First Name</label>
                        <div>
                            <Field
                                name="name"
                                component={this.renderField}
                                className="inputField"
                                type="text"
                                validate={[this.required]}
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label>Last Name</label>
                            <Field
                                name="lastName"
                                className="inputField"
                                component={this.renderField}
                                type="text"
                                validate={[this.required]}
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label>Email</label>
                            <Field
                                name="email"
                                className="inputField"
                                component={this.renderField}
                                type="text"
                                validate={[this.email, this.required]}
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label>CPF</label>
                            <Field
                                name="cpf"
                                component={this.renderField}
                                className="inputField"
                                type="text"
                                validate={[this.required, this.cpf]}
                            />
                        </div>
                    </div>
                    <div>
                        <label>Phone</label>
                        <div>
                            <Field
                                name="phone"
                                component={this.renderField}
                                type="text"
                                className="inputField"
                                validate={[this.phone, this.required]}
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
                </form>
            </Container>

        )
    }

}

const mapStateToProps = state => ({
    part: state.partsReducer
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ submitForm }, dispatch);

PartForm = reduxForm({
    form: 'partForm',
})(PartForm);

export default PartForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(PartForm);

