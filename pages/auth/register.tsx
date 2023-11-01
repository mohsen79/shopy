import classes from "./register.module.scss";
import Particles from '../../app/components/Particles/Particles';
import { Fragment } from "react";
import { NextPage } from "next";
import { Form, Formik } from "formik";
import Input from "@/app/components/shared/form/input";

interface RegisterFormValues {
  name: string,
  email: string,
  password: string;
}

const Register: NextPage = () => {
  const initialValues: RegisterFormValues = {
    name: "",
    email: "",
    password: ""
  };

  return (
    <Fragment>
      <Particles color="#0a0a0a" count={200} />
      <div className={classes.register}>
        <section className={classes.content}>
          <h2>register page</h2>
          <section className={classes.inputs}>
            <Formik initialValues={initialValues} onSubmit={(values) => { console.log(values) }}>
              <Form action="">
                <Input name="name" type="text" label="name" />
                <Input name="email" type="email" label="email" />
                <Input name="password" type="password" label="password" />
                <button type="submit">register</button>
              </Form>
            </Formik>
          </section>
        </section>
      </div>
    </Fragment>
  );
}

export default Register