import { VerifyCodeValuesInterface } from "@/app/contracts/auth";
import { Form, FormikProps } from "formik";
import Input from "../shared/form/input";

const InnerVerifyCode = (props: FormikProps<VerifyCodeValuesInterface>) => {
    return (
        <Form>
            <Input name="code" label="code" />
            <button type="submit">verify</button>
        </Form>
    );
}

export default InnerVerifyCode;