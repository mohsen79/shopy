import InnerLoginForm from "@/app/components/auth/innerLoginForm";
import { LoginFormValuesInterface } from "@/app/contracts/auth";
import ValidationError from "@/app/exceptions/ValidationError";
import callApi from "@/app/helpers/callApi";
import { withFormik } from "formik";
import * as yup from 'yup';

interface LoginFormProps {
    email?: string,
    password?: string,
    setCookie: any
}

const LoginFormValidationSchema = yup.object().shape({
    email: yup.string().min(3).required().email(),
    password: yup.string().required().min(8)
});

const LoginForm = withFormik<LoginFormProps, LoginFormValuesInterface>({
    mapPropsToValues: props => ({
        email: '',
        password: ''
    }),
    validationSchema: LoginFormValidationSchema,
    handleSubmit: async (values, { props, setFieldError }) => {
        try {
            const res = await callApi().post('/auth/login', values);
            if (res.status === 200) {
                props.setCookie('shopy-token', res.data.token, {
                    "maxAge": 3600 * 24 * 30,
                    "domain": "localhost",
                    "path": "/",
                    "sameSite": "lax"
                })
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