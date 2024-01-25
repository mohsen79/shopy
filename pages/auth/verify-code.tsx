import classes from "./forms.module.scss";
import Particles from '../../app/components/Particles/Particles';
import { Fragment, useEffect } from "react";
import VerifyCode from "@/app/forms/auth/verifyCode";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { selectPhoneVerifyToken, updatePhoneVerifyToken } from "@/app/store/auth";
import Router from "next/router";
import { NextPageWithLayout } from "../_app";
import GuestLayout from "@/app/components/guestLayout";

const Register: NextPageWithLayout = () => {
    const token = useAppSelector(selectPhoneVerifyToken);
    const dispatch = useAppDispatch();

    const clearPhoneVerifyToken = () => {
        dispatch(updatePhoneVerifyToken(undefined));
    }

    useEffect(() => {
        Router.beforePopState(() => {
            clearPhoneVerifyToken();
            return true;
        });
        if (token === undefined) {
            Router.push('/auth/login');
        }
    }, [token]);

    return (
        <Fragment>
            <Particles color="#0a0a0a" count={200} />
            <div className={classes.form}>
                <section className={classes.content}>
                    <h2>verify token page</h2>
                    <section className={classes.inputs}>
                        <VerifyCode token={token} clearToken={clearPhoneVerifyToken} />
                    </section>
                </section>
            </div>
        </Fragment>
    );
}

Register.getLayout = page => <GuestLayout>{page}</GuestLayout>

export default Register