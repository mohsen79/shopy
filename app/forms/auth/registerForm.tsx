import InnerRegisterForm from "@/app/components/auth/innerRegisterForm";
import { RegisterFormValuesInterface } from "@/app/contracts/auth";
import callApi from "@/app/helpers/callApi";
import { withFormik } from "formik";
import Router from "next/router";
import * as yup from "yup";

interface RegisterFormProps {
    name?: string,
}

const RegisterFormValidationSchema = yup.object().shape({
    name: yup.string().required().min(3),
    email: yup.string().required().email(),
    password: yup.string().required().min(8)
});

const RegisterForm = withFormik<RegisterFormProps, RegisterFormValuesInterface>({
    mapPropsToValues: props => ({
        name: "",
        email: '',
        password: ''
    }),
    validationSchema: RegisterFormValidationSchema,
    handleSubmit: async (values) => {
        const res = await callApi().post('/auth/register', values);
        if (res.status === 201) {
            Router.push('/auth/login');
        }
    }
})(InnerRegisterForm);

export default RegisterForm;