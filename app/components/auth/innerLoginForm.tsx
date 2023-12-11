import { Form, FormikProps } from "formik";
import Input from "../shared/form/input";
import { LoginFormValuesInterface } from "@/app/contracts/auth";

const InnerLoginForm = (props: FormikProps<LoginFormValuesInterface>) => {
    return (
        <Form action="">
            {/* <Input name="email" type="email" label="email" /> */}
            <Input name="phone" label="phone" />
            {/* <Input name="password" type="password" label="password" /> */}
            <button type="submit">login</button>
        </Form>
    );
}

export default InnerLoginForm;