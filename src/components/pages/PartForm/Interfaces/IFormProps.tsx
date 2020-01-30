export 
interface FormValues {
    email: string;
    name: string;
    cpf: string;
    phone: string;
}

export interface MyFormProps {
    initialEmail?: string;
    message: string;
}

export interface OtherProps {
    message: string;
}