import classes from "./forms.module.scss";
import Particles from '../../app/components/Particles/Particles';
import { Fragment } from "react";
import { NextPage } from "next";
import LoginForm from '../../app/forms/auth/loginForm';
import { useCookies } from "react-cookie";

const Login: NextPage = () => {
    const [cookies, setCookie] = useCookies(['shopy-token']);

    return (
        <Fragment>
            <Particles color="#0a0a0a" count={200} />
            <div className={classes.form}>
                <section className={classes.content}>
                    <h2>login page</h2>
                    <section className={classes.inputs}>
                        <LoginForm setCookie={setCookie} />
                    </section>
                </section>
            </div>
        </Fragment>
    );
}

export default Login