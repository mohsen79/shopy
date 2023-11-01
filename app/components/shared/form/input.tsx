import { ErrorMessage, Field } from "formik";
import { FC } from "react";
import classes from './input.module.scss';

interface InputProps {
    name: string,
    type?: string,
    label: string,
    inputClassName?: string,
    errorClassName?: string,
    labelClassName?: string
}

const Input: FC<InputProps> = ({
    name,
    type = 'text',
    label,
    inputClassName,
    errorClassName,
    labelClassName
}) => {
    return (
        <div className={classes.input}>
            <label htmlFor={name} className={labelClassName}>{label}</label>
            <Field id={name} name={name} type={type} required className={inputClassName}></Field>
            <ErrorMessage name={name} className={errorClassName} component="div" />
        </div>
    );
}

export default Input;