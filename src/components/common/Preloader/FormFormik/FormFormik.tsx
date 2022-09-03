import React from "react";
import {Field, Form, Formik, FormikHelpers, useFormik} from "formik";
import s from "./FormFormik.module.css";
import * as Yup from "yup";

interface Values {
    message: string
}

type PropsType = {
    onSubmit: (values: string) => void
}

type FormikErrorType = {
    message?: string
}

export const FormFormik: React.FC<PropsType> = (props) => {

    const formik = useFormik({
        initialValues: {
            message: ''
        },
        validate: async (values) => {
            const errors: FormikErrorType = {};
            if (!values.message) {
                errors.message = 'Message is required';
            }
            return errors;
        },
        onSubmit: async values => {
            props.onSubmit(values.message)
            formik.resetForm()
        },
    })


    return (
        <div className={s.wrapper}>
            <form className={s.form} onSubmit={formik.handleSubmit}>
                <div className={s.textareaContainer}>
                    <textarea {...formik.getFieldProps('message')} name="message" placeholder={'Input message for post'}
                              className={`${s.textarea} ${formik.errors.message && s.textareaError}`}/></div>
                {formik.touched.message && formik.errors.message &&
                    <div className={s.error}>{formik.errors.message}</div>}
                <div>
                    <button type="submit">Send</button>
                </div>
            </form>
        </div>
    );
};
