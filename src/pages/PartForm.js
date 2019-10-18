import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { handleSubmit } from '../store/actions/partsActions';
import Header from '../components/Header';

class PartForm extends Component {
    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;
        console.log(this.props.handleSubmit);
        return (
            <form onSubmit={values => handleSubmit(values.search)}>
                <div>
                    <Header />
                </div>
                <div className="PartForm">
                    <label>First Name</label>
                    <div>
                        <Field
                            name="name"
                            component="input"
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
                            placeholder="Phone"
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
        )
    }

}

const mapDispatchToProps = dispatch =>
    bindActionCreators(handleSubmit, dispatch);

PartForm = connect(
    null,
    mapDispatchToProps
)(PartForm);

export default reduxForm({
    form: 'partForm'
})(PartForm);


