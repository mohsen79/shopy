import InnerRegisterForm from "@/app/components/auth/innerRegisterForm";
import { RegisterFormValuesInterface } from "@/app/contracts/auth";
import ValidationError from "@/app/exceptions/ValidationError";
import callApi from "@/app/helpers/callApi";
import { withFormik } from "formik";
import Router from "next/router";
import * as yup from "yup";

interface RegisterFormProps {
    // name?: string,
    // phone: string
}

let regex = /^(0|0098|\+98)9(0[1-5]|[1 3]\d|2[0-2]|98)\d{7}$/;

const RegisterFormValidationSchema = yup.object().shape({
    name: yup.string().required().min(3),
    // email: yup.string().required().email(),
    // password: yup.string().required().min(8)
    phone: yup.string().required().min(8).matches(regex, 'phone format is invaliddd')
});

const RegisterForm = withFormik<RegisterFormProps, RegisterFormValuesInterface>({
    mapPropsToValues: (props) => ({
        name: "",
        // email: '',
        // password: ''
        phone: ''
    }),
    validationSchema: RegisterFormValidationSchema,
    handleSubmit: async (values, { setFieldError }) => {
        const res = await callApi().post('/auth/register', values);
        try {
            if (res.status === 201) {
                Router.push('/auth/login');
            }
        } catch (error) {
            if (error instanceof ValidationError) {
                Object.entries(error.message).forEach(([key, value]) =>
                    setFieldError(key, value as string));
            }
        }
    }
})(InnerRegisterForm);

export default RegisterForm;