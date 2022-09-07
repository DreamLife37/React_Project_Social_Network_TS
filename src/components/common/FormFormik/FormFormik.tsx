import React from "react";
import {useFormik} from "formik";
import s from "./FormFormik.module.css";

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
            <div className={s.title}>Создать пост</div>
            <form className={s.form} onSubmit={formik.handleSubmit}>
                    <textarea {...formik.getFieldProps('message')} name="message" placeholder={'Input message for post'}
                              className={`${s.textarea} ${formik.errors.message && s.textareaError}`}/>
                {formik.touched.message && formik.errors.message &&
                    <div className={s.error}>{formik.errors.message}</div>}
                <div className={s.buttonWrapper}>
                    <button type="submit" className={s.button}>Отправить</button>
                </div>
            </form>
        </div>
    );
};
