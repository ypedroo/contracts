import React from 'react';
import * as Yup from 'yup';
import { Container } from '../styles/styles';
import Header from '../components/Header';

import { withFormik, FormikProps, Form, Field } from 'formik';

interface FormValues {
    email: string;
    name: string;
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
                <h2 className="form-field" > Email </h2>
                <Field type="email" name="email" />
                {touched.email && errors.email && <div>{errors.email}</div>}

                <h2 className="form-field" > Name </h2>
                <Field type="name" name="name" />
                {touched.name && errors.name && <div>{errors.name}</div>}

                <h2 className="form-field" > CPF </h2>
                <Field type="cpf" name="cpf" />
                {touched.cpf && errors.cpf && <div>{errors.cpf}</div>}

                <h2 className="form-field" > Phone </h2>
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
            name: '',
            cpf: '',
            phone: ''
        };
    },

    validationSchema: Yup.object().shape({
        email: Yup.string()
            .email("Email not valid")
            .required("Email is required"),
        name: Yup.string().required("name is required"),
        cpf: Yup.string()
            .required("cpf is required")
            .matches(/^([0-9]){3}\.([0-9]){3}\.([0-9]){3}-([0-9]){2}$/i),
        phone: Yup.string()
            .required("phone is required")
            .matches(/^(0|[1-9][0-9]{8})$/i),
    }),

    handleSubmit: values => {
        console.log(values);
    },
})(InnerForm);

const PartForm = () => (
    <div>
        <Header />
        <MyForm message="Register the part" />
    </div>
);

export default PartForm;