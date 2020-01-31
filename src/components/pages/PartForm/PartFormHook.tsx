import React from 'react';
import * as Yup from 'yup';
import Header from '../../Header';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { submitForm } from '../../../store/actions/partsActions';
import { Container } from '../../../styles/styles';


export default () => {
    const [submitData, setSubmitData] = React.useState('');
    const dispatch = useDispatch()
    const handleSubmit = (values: any) => dispatch(submitForm(values));
    const form = useFormik({
        initialValues: {
            name: '',
            email: 'email@example.com',
            cpf: '___.___.___-__',
            phone: ''
        },
        onSubmit: (values: any) => {
            setSubmitData(values);
            handleSubmit(values);
        },
        validationSchema: Yup.object().shape({
            email: Yup.string()
                .email("Email not valid")
                .required("Email is required"),
            name: Yup.string().required("Name is required"),
            cpf: Yup.string()
                .required("cpf is required")
                .matches(/^([0-9]){3}\.([0-9]){3}\.([0-9]){3}-([0-9]){2}$/i, 'Invalid CPF'),
            phone: Yup.string()
                .required("phone is required")
                .matches(/^(0|[1-9][0-9]{9})$/i, 'Invalid phone number'),
        }),
    });

    return (
        <Container>
            <div>
                <Header />
                <h1>Parts</h1>
                <form onSubmit={form.handleSubmit}>
                    <h2 className="form-field" > Name </h2>
                    <input type="text" name="name" onChange={form.handleChange}
                        onBlur={form.handleBlur} value={form.values.name}
                    />
                    {form.errors.name && form.touched.name && <p className="formErrorMessage">{form.errors.name}</p>}
                    <h2 className="form-field" > Email </h2>
                    <input type="email" name="email" onChange={form.handleChange}
                        onBlur={form.handleBlur} value={form.values.email}
                    />
                    {form.errors.email && form.touched.email && <p className="formErrorMessage">{form.errors.email}</p>}
                    <h2 className="form-field" > CPF </h2>
                    <input type="cpf" name="cpf" onChange={form.handleChange}
                        onBlur={form.handleBlur} value={form.values.cpf}
                    />
                    {form.errors.cpf && form.touched.cpf && <p className="formErrorMessage">{form.errors.cpf}</p>}
                    <h2 className="form-field" > Phone </h2>
                    <input type="phone" name="phone" onChange={form.handleChange}
                        onBlur={form.handleBlur} value={form.values.phone}
                    />
                    {form.errors.phone && form.touched.phone && <p className="formErrorMessage">{form.errors.phone}</p>}
                    <br />
                    <button type="submit" disabled={form.isSubmitting}>
                        Submit
                    </button>
                </form>
                {submitData && (
                    <div>
                        <h1>submit data</h1>
                    </div>
                )}
            </div>
        </Container>
    );
};
