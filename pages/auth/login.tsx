import classes from "./forms.module.scss";
import Particles from '../../app/components/Particles/Particles';
import { Fragment } from "react";
import { NextPage } from "next";
import LoginForm from '../../app/forms/auth/loginForm';
import { useAppDispatch } from "@/app/hooks";
import { updatePhoneVerifyToken } from "@/app/store/auth";

const Login: NextPage = () => {
    const dispatch = useAppDispatch();

    const setPhoneVerifyToken = (token: string) => {
        dispatch(updatePhoneVerifyToken(token));
    }

    return (
        <Fragment>
            <Particles color="#0a0a0a" count={200} />
            <div className={classes.form}>
                <section className={classes.content}>
                    <h2>login page</h2>
                    <section className={classes.inputs}>
                        <LoginForm setToken={setPhoneVerifyToken} />
                    </section>
                </section>
            </div>
        </Fragment>
    );
}

export default Login