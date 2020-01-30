import React, { useEffect } from 'react';
import * as Yup from 'yup';
import Header from '../../Header';
import { Container } from '../../../styles/styles';
import { submitForm } from '../../../store/actions/partsActions';
import { withFormik, FormikProps, Form, Field } from 'formik';
import { SubmitHandler } from 'redux-form';
import { useDispatch } from 'react-redux'
import { FormValues, MyFormProps, OtherProps } from './Interfaces/IFormProps'

const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
    const { touched, errors, isSubmitting, message } = props;
    return (
        <Container>
            <Form>
                <h1>{message}</h1>
                <h2 className="form-field" > Email </h2>
                <Field type="email" name="email" />
                {touched.email && errors.email && <p className="formErrorMessage">{errors.email}</p>}

                <h2 className="form-field" > Name </h2>
                <Field type="name" name="name" />
                {touched.name && errors.name && <p className="formErrorMessage">{errors.name}</p>}

                <h2 className="form-field" > CPF </h2>
                <Field type="cpf" name="cpf" />
                {touched.cpf && errors.cpf && <p className="formErrorMessage">{errors.cpf}</p>}

                <h2 className="form-field" > Phone </h2>
                <Field type="phone" name="phone" />
                {touched.phone && errors.phone && <p className="formErrorMessage">{errors.phone}</p>}

                <button type="submit" disabled={isSubmitting}>
                    Submit
            </button>
            </Form>
        </Container>
    );
};
const dispatch = useDispatch();

useEffect(() => {
    dispatch(submitForm)
})



const MyForm = withFormik<MyFormProps, FormValues, SubmitHandler>({
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
            .matches(/^([0-9]){3}\.([0-9]){3}\.([0-9]){3}-([0-9]){2}$/i, 'Invalid CPF'),
        phone: Yup.string()
            .required("phone is required")
            .matches(/^(0|[1-9][0-9]{9})$/i, 'Invalid phone number'),
    }),

    handleSubmit(values, { props, setSubmitting }) {
        dispatch(values);
        setSubmitting(false);
    },
})(InnerForm);

//i need this cause formik uses the state so i pass the state as a prop and then i can dispatch the action

// const mapStateToProps = (state:any) => ({
//     props: state.MyFormProps 

// // });

// const mapDispatchToProps = (dispatch: any) =>
//     bindActionCreators({ submitForm }, dispatch);

const PartForm = () => (
    <div>
        <Header />
        <MyForm message="Register the part" />
    </div>
);
export default PartForm;
