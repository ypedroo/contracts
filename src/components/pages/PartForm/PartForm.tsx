import React from 'react';
import * as Yup from 'yup';
import Header from '../../Header';
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { useFormik } from 'formik';
import { submitForm } from '../../../store/actions/partsActions';
import { Container } from '../../../styles/styles';


export default () => {
    const [submitData] = React.useState('');
    const reqSuccess = useSelector((state:any) => state.partsReducer.reqSuccess);
    const dispatch = useDispatch();
    const history = useHistory();
    const handleSubmit = (values: State) => dispatch(submitForm(values));
    const initialState = {
        name: '',
        email: '',
        cpf: '',
        phone: ''
    };
    console.log(reqSuccess)
    type State = typeof initialState;
    const showAlert = () => {
        reqSuccess ? failAlert() : successAlert();
    }

    const successAlert = () => {
        Swal.fire({
            title: 'Hey you register the part',
            text: "You can register more or just go home!",
            type: 'success',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Ok take me home!',
            cancelButtonText: 'Meh i want to keep doing this.',
            backdrop: `
            rgba(0,0,123,0.4)
            url("/images/nyan-cat.gif")
            center left
            no-repeat
            `
        }).then((result:any) => {
            if (result.value) {
                history.push('/')
            }
        })
    }

    const failAlert = () => {
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

    const form = useFormik({
        initialValues: {
            name: initialState.name,
            email: initialState.email,
            cpf: initialState.cpf,
            phone: initialState.phone,
        },
        onSubmit: (values: State) => {
            handleSubmit(values);
            form.resetForm();
            showAlert();
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
                        onBlur={form.handleBlur} value={form.values.name} placeholder="First name"
                    />
                    {form.errors.name && form.touched.name && <p className="formErrorMessage">{form.errors.name}</p>}
                    <h2 className="form-field" > Email </h2>
                    <input type="email" name="email" onChange={form.handleChange}
                        onBlur={form.handleBlur} value={form.values.email} placeholder="you@email.com"
                    />
                    {form.errors.email && form.touched.email && <p className="formErrorMessage">{form.errors.email}</p>}
                    <h2 className="form-field" > CPF </h2>
                    <input type="cpf" name="cpf" onChange={form.handleChange} placeholder="___.___.___-__"
                        onBlur={form.handleBlur} value={form.values.cpf}
                    />
                    {form.errors.cpf && form.touched.cpf && <p className="formErrorMessage">{form.errors.cpf}</p>}
                    <h2 className="form-field" > Phone </h2>
                    <input type="phone" name="phone" onChange={form.handleChange}
                        onBlur={form.handleBlur} value={form.values.phone} placeholder="0000000000"
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
