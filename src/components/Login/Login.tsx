import {Formik, Field, Form, FormikHelpers} from 'formik';
import React from "react";

interface Values {
    email: string
    password: string
    rememberMe: boolean
}

type PropsType = {
    onSubmit: (values: Values) => void
}

export const Login = () => {
    const onSubmit = (formData: Values) => {
        console.log(formData)
    }
    return <div>
        <h1>Login</h1>
        <LoginForm onSubmit={onSubmit}/>
    </div>
}

const LoginForm: React.FC<PropsType> = (props) => {
    return (
        <div>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    rememberMe: false,
                }}

                onSubmit={(
                    values: Values,
                    {setSubmitting}: FormikHelpers<Values>
                ) => {
                    props.onSubmit(values)
                }}
            >
                <Form>
                    <Field name="email" type="email" placeholder={'email'}/>
                    <Field name="password" type="password" placeholder={'password'}/>
                    <Field type="checkbox" name="rememberMe"/>
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    );
};


