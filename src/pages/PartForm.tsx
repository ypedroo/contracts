import React from 'react';
 import * as Yup from 'yup';
import { Container } from '../styles/styles';
import Header from '../components/Header';

import { withFormik, FormikProps, FormikErrors, Form, Field } from 'formik';

interface FormValues {
    email: string;
    password: string;
    cpf: string;
    phone: string;
}
interface OtherProps {
    message: string;
}

const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
    const { touched, errors, isSubmitting, message } = props;
    return (
        <Container>
            <Form>
                <h1>{message}</h1>
                <Field type="email" name="email" />
                {touched.email && errors.email && <div>{errors.email}</div>}

                <Field type="password" name="password" />
                {touched.password && errors.password && <div>{errors.password}</div>}

                <Field type="cpf" name="cpf" />
                {touched.cpf && errors.cpf && <div>{errors.cpf}</div>}

                <Field type="phone" name="phone" />
                {touched.phone && errors.phone && <div>{errors.phone}</div>}

                <button type="submit" disabled={isSubmitting}>
                    Submit
            </button>
            </Form>
        </Container>
    );
};

// The type of props MyForm receives
interface MyFormProps {
    initialEmail?: string;
    message: string; // if this passed all the way through you might do this or make a union type
}

// Wrap our form with the withFormik HoC
const MyForm = withFormik<MyFormProps, FormValues>({
    // Transform outer props into form values
    mapPropsToValues: props => {
        return {
            email: props.initialEmail || '',
            password: '',
            cpf: '',
            phone: ''
        };
    },

    validate: (values: FormValues) => {
        let errors: FormikErrors = {};
        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }
        if (!values.cpf) {
            errors.cpf = 'Required';
        } else if (!/^([0-9]){3}\.([0-9]){3}\.([0-9]){3}-([0-9]){2}$/i.test(values.cpf)) {
            errors.cpf = 'Invalid cpf address';
        }
        if (!values.phone) {
            errors.phone = 'Required';
        } else if (!/^(0|[1-9][0-9]{9})$/i.test(values.phone)) {
            errors.phone = 'Invalid phone, need to be 10 digits';
        }
        return errors;
    },

    handleSubmit: values => {
        // do submitting things
    },
})(InnerForm);

const PartForm = () => (
    <div>
        <Header />
        <MyForm message="Register the part" />
    </div>
);

export default PartForm;