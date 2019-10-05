import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { submitRegister } from '../../actions/partsActions';
import rootRreducer from '../../reducers/rootReducer';
import Header from '../UI/Header';

class PartForm extends Component {
    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;
        return (
            <form onSubmit={handleSubmit}>
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
                            type="email"
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
                            type="cpf"
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
                            type="phone"
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

const mapStateToProps = (state, ownProps) => {
    return {
        parts: this.state.rootReducer.parts
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators(submitRegister(this.props), dispatch);

PartForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(PartForm);

export default reduxForm({
    form: 'partForm' // a unique name for this form
})(PartForm);


