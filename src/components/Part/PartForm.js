import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Header from '../UI/Header';

const SimpleForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Header />
            </div>
            <div>
                <label>First Name</label>
                <div>
                    <Field
                        name="firstName"
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

export default reduxForm({
    form: 'simple' // a unique identifier for this form
})(SimpleForm)