import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';


export default () => {
    const dispatch = useDispatch()
    const [submitData, setSubmitData] = React.useState('');
    const form = useFormik({
        initialValues: {
            name: '',
            email: 'email@example.com',
            cpf: '___.___.___-__',
            phone: ''
        },
        onSubmit: (values: any) => setSubmitData(values),
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
        })
    });

    return (
        <div>
            <h1>Parts</h1>
            <form onSubmit={form.handleSubmit}>
                <input type="text" name="name" onChange={form.handleChange}
                    onBlur={form.handleBlur} value={form.values.name}
                />
                {form.errors.name && form.touched.name && form.errors.name}
                <br />
                <input type="email" name="email" onChange={form.handleChange}
                    onBlur={form.handleBlur} value={form.values.email}
                />
                {form.errors.email && form.touched.email && form.errors.email}
                <br />
                <br />
                <input type="cpf" name="cpf" onChange={form.handleChange}
                    onBlur={form.handleBlur} value={form.values.cpf}
                />
                {form.errors.cpf && form.touched.cpf && form.errors.cpf}
                <br />
                <br />
                <input type="phone" name="phone" onChange={form.handleChange}
                    onBlur={form.handleBlur} value={form.values.phone}
                />
                {form.errors.phone && form.touched.phone && form.errors.phone}
                <br />
                <button type="submit" disabled={form.isSubmitting}>
                    Submit
        </button>
            </form>
            {submitData && (
                <div>
                    <h1>submit data</h1>
                    <pre>{JSON.stringify(submitData, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};
