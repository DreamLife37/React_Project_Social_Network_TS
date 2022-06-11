import {Formik, Field, Form, FormikHelpers} from 'formik';
import React from "react";
import {connect} from 'react-redux';
import * as Yup from 'yup';
import {login} from '../../redux/auth-reducer';
import s from './Login.module.css'
import {AppStateType} from "../../redux/redux-store";
import {Navigate} from "react-router-dom";

interface Values {
    email: string
    password: string
    rememberMe: boolean
}

type PropsType = {
    onSubmit: (values: Values) => void
}

type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
}

type MapStatePropsType = {
    isAuth: boolean
}

type LoginPropsType = MapStatePropsType & MapDispatchPropsType

const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: Values) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Navigate to={'/profile'}/>
    }
        return <div>
            <h1 className={s.login}>Login</h1>
            <LoginForm onSubmit={onSubmit}/>
        </div>
}

const LoginSchema = Yup.object().shape({
    password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters')
        .max(40, 'Password must not exceed 40 characters'),
    email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
});

const LoginForm: React.FC<PropsType> = (props) => {
    return (
        <div>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    rememberMe: false,
                }}
                validationSchema={LoginSchema}
                onSubmit={(
                    values: Values,
                    {setSubmitting}: FormikHelpers<Values>
                ) => {
                    props.onSubmit(values)
                }}
            >
                {({errors, touched}) => (
                    <Form className={s.login}>
                        <div className={s.formGroup}>
                            <label htmlFor="email"></label>
                            <Field name="email"
                                   type="email"
                                   className="form-control"
                                   placeholder={'Email'}/>
                            {touched.email && errors.email && <div className={s.error}>{errors.email}</div>}
                        </div>

                        <div className={s.formGroup}>
                            <label htmlFor="password"></label>
                            <Field
                                name="password"
                                type="password"
                                className="form-control"
                                placeholder={'Password'}
                            />
                            {touched.password && errors.password && <div className={s.error}>{errors.password}</div>}
                        </div>
                        <div className={s.formGroup}>
                            <label htmlFor="password"> Remember Me </label>
                            <Field type="checkbox" name="rememberMe"/></div>
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};


let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth
}) as MapStatePropsType

export default connect(mapStateToProps, {login})(Login)