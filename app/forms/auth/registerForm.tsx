import InnerRegisterForm from "@/app/components/auth/innerRegisterForm";
import { RegisterFormValuesInterface } from "@/app/contracts/auth";
import { withFormik } from "formik";
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
    handleSubmit: (values) => {
        console.log(values);
    }
})(InnerRegisterForm);

export default RegisterForm;