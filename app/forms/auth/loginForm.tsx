import InnerLoginForm from "@/app/components/auth/innerLoginForm";
import { LoginFormValuesInterface } from "@/app/contracts/auth";
import ValidationError from "@/app/exceptions/ValidationError";
import callApi from "@/app/helpers/callApi";
import { withFormik } from "formik";
import Router from "next/router";
import * as yup from 'yup';

interface LoginFormProps {
    // email?: string,
    // password?: string,
    setToken: (token: string) => void
}

let regex = /^(0|0098|\+98)9(0[1-5]|[1 3]\d|2[0-2]|98)\d{7}$/;

const LoginFormValidationSchema = yup.object().shape({
    // email: yup.string().min(3).required().email(),
    // password: yup.string().required().min(8)
    phone: yup.string().required().min(8).matches(regex, 'phone format is invaliddd')
});

const LoginForm = withFormik<LoginFormProps, LoginFormValuesInterface>({
    mapPropsToValues: props => ({
        // email: '',
        // password: ''
        phone: ''
    }),
    validationSchema: LoginFormValidationSchema,
    handleSubmit: async (values, { props, setFieldError }) => {
        try {
            const res = await callApi().post('/auth/login', values);
            if (res.status === 200) {
                // props.setCookie('shopy-token', res.data.token, {
                //     "maxAge": 3600 * 24 * 30,
                //     "domain": "localhost",
                //     "path": "/",
                //     "sameSite": "lax"
                // })
                Router.push('/auth/verify-code');
                // localStorage.setItem('tokne', res.data.token);
                props.setToken(res.data.token);
            }
        } catch (error) {
            if (error instanceof ValidationError) {
                Object.entries(error.message).forEach(([key, value]) =>
                    setFieldError(key, value as string));
            }
        }
    }
})(InnerLoginForm);

export default LoginForm;