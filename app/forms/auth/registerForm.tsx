import Input from "@/app/components/shared/form/input";
import { Form, FormikProps, withFormik } from "formik";

interface RegisterFormValues {
    name: string,
    email: string,
    password: string;
}

const InnerRegisterForm = (props: FormikProps<RegisterFormValues>) => {
    return (
        <Form action="">
            <Input name="name" type="text" label="name" />
            <Input name="email" type="email" label="email" />
            <Input name="password" type="password" label="password" />
            <button type="submit">register</button>
        </Form>
    );
}

interface RegisterFormProps {
    name?: string,
}

const RegisterForm = withFormik<RegisterFormProps, RegisterFormValues>({
    mapPropsToValues: props => {
        return {
            name: props.name ?? "",
            email: '',
            password: ''
        }
    },
    handleSubmit: (values) => {
        console.log(values);
    }
})(InnerRegisterForm);

export default RegisterForm;