import classes from "./register.module.scss";
import Particles from '../../app/components/Particles/Particles';
import { Fragment } from "react";
import { NextPage } from "next";
import RegisterForm from '../../app/forms/auth/registerForm';

const Register: NextPage = () => {

  return (
    <Fragment>
      <Particles color="#0a0a0a" count={200} />
      <div className={classes.register}>
        <section className={classes.content}>
          <h2>register page</h2>
          <section className={classes.inputs}>
            <RegisterForm name="mohsen" />
          </section>
        </section>
      </div>
    </Fragment>
  );
}

export default Register