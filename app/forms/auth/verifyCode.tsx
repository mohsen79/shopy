import InnerVerifyCode from "@/app/components/auth/innerVerifyCode";
import { VerifyCodeValuesInterface } from "@/app/contracts/auth";
import ValidationError from "@/app/exceptions/ValidationError";
import { stroeLoginCookie } from "@/app/helpers/auth";
import callApi from "@/app/helpers/callApi";
import { withFormik } from "formik";
import Router from "next/router";
import * as yup from "yup";

interface VerifyCodeProps {
    token?: string,
    clearToken: () => void
}

const VerifyCodeValidationSchema = yup.object().shape({
    code: yup.number().required()
});

const VerifyCode = withFormik<VerifyCodeProps, VerifyCodeValuesInterface>({
    mapPropsToValues: (props) => ({
        code: '',
        token: props.token || ""
    }),
    validationSchema: VerifyCodeValidationSchema,
    handleSubmit: async (values, { props, setFieldError }) => {
        const res = await callApi().post('/auth/login/verify-phone', values);
        try {
            if (res.status === 200) {
                Router.push('/panel');
                stroeLoginCookie(res.data?.user?.token);
                props.clearToken();
            }
            console.log(res);
        } catch (error) {
            console.log(error);
            if (error instanceof ValidationError) {
                Object.entries(error.message).forEach(([key, value]) =>
                    setFieldError(key, value as string));
            }
        }
    }
})(InnerVerifyCode);

export default VerifyCode;