import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';


const PartFormHook = () => {
    const { getFieldProps, handleSubmit, errors, touched } = useFormik({
        initialValues: {
            email: '',
            name: '',
            cpf: '',
            phone: ''
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
        onSubmit: (values, bag) => {
            console.log(values);
        }
    });

    const [name, metadataName]: any = getFieldProps("name");
    const [email, metadataEmail]: any = getFieldProps("email");
    const [phone, metadataPhone]: any = getFieldProps("phone");
    const [cpf, metadataCpf]: any = getFieldProps("cpf",);
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome: </label>
                    <input placeholder="Name" {...name} />
                    {metadataName.touch && metadataName.error && (
                        <span>{metadataName.error}</span>
                    )}
                </div>
                <div>
                    <label>Email: </label>
                    <input placeholder="Email" {...email} />
                    {metadataEmail.touch && metadataEmail.error && (
                        <span>{metadataEmail.error}</span>
                    )}
                </div>
                <div>
                    <label>Email: </label>
                    <input placeholder="Cpf" {...cpf} />
                    {metadataCpf.touch && metadataCpf.error && (
                        <span>{metadataEmail.error}</span>
                    )}
                </div>
                <div>
                    <label>Telefone: </label>
                    <input placeholder="Phone" {...phone} />
                    {metadataPhone.touch && metadataPhone.error && (
                        <span>{metadataPhone.error}</span>
                    )}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default PartFormHook;
