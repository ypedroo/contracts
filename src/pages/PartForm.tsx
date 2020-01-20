import React from 'react';
// import * as Yup from 'yup';
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

// Aside: You may see InjectedFormikProps<OtherProps, FormValues> instead of what comes below in older code.. 
//InjectedFormikProps was artifact of when Formik only exported a HoC. It is also less flexible as it MUST wrap all props (it passes them through).
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

    // Add a custom validation function (this can be async too!)
    // validate: (values: FormValues) => {
    //     let errors: FormikErrors = {};
    //     if (!values.email) {
    //         errors.email = 'Required';
    //     } else if (!isValidEmail(values.email)) {
    //         errors.email = 'Invalid email address';
    //     }
    //     return errors;
    // },

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