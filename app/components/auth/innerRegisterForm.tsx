import { RegisterFormValuesInterface } from "@/app/contracts/auth";
import { Form, FormikProps } from "formik";
import Input from "../shared/form/input";

const InnerRegisterForm = (props: FormikProps<RegisterFormValuesInterface>) => {
    return (
        <Form action="">
            <Input name="name" type="text" label="name" />
            <Input name="email" type="email" label="email" />
            <Input name="password" type="password" label="password" />
            <button type="submit">register</button>
        </Form>
    );
}

export default InnerRegisterForm;