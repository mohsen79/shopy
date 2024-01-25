import classes from "./forms.module.scss";
import Particles from '../../app/components/Particles/Particles';
import { Fragment } from "react";
import LoginForm from '../../app/forms/auth/loginForm';
import { useAppDispatch } from "@/app/hooks";
import { updatePhoneVerifyToken } from "@/app/store/auth";
import { NextPageWithLayout } from "../_app";
import GuestLayout from "@/app/components/guestLayout";

const Login: NextPageWithLayout = () => {
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

Login.getLayout = page => <GuestLayout>{page}</GuestLayout>

export default Login