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
    onSubmit: (values: Values, setStatus: any) => void
}

type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean, setStatus: any) => void
}

type MapStatePropsType = {
    isAuth: boolean
}

type LoginPropsType = MapStatePropsType & MapDispatchPropsType

const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: Values, setStatus: any) => {
        props.login(formData.email, formData.password, formData.rememberMe, setStatus)
    }

    if (props.isAuth) {
        return <Navigate to={'/profile'}/>
    }
    return <div className={s.containerLoginForm}>
        <h1 className={s.title}>Вход в Social Network</h1>
        <h2 className={s.title}>by DevAndreyIT </h2>
        <div className={s.warning}>
            <div>Чтобы зайти, сначала зарегистрируйтесь <a
                href={'https://social-network.samuraijs.com/signUp'}>здесь.</a></div>
        </div>
        <LoginForm onSubmit={onSubmit}/>
    </div>
}

const LoginSchema = Yup.object().shape({
    password: Yup.string()
        .required('Пароль обязателен')
        .min(4, 'Пароль менее чем 4 символа')
        .max(40, 'Пароль более 40 символов'),
    email: Yup.string()
        .required('Email обязателен')
        .email('Email не валидный'),
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
                    {setSubmitting, setStatus}: FormikHelpers<Values>
                ) => {
                    props.onSubmit(values, setStatus)
                }}
            >
                {({errors, touched, status}) => (
                    <Form className={s.login}>
                        <div className={s.formGroup}>
                            <label htmlFor="email"></label>
                            <Field name="email"
                                   type="email"
                                   className={s.input}
                                   placeholder={'Email'}/>
                            {touched.email && errors.email && <div className={s.error}>{errors.email}</div>}
                        </div>

                        <div className={s.formGroup}>
                            <label htmlFor="password"></label>
                            <Field
                                name="password"
                                type="password"
                                className={s.input}
                                placeholder={'Password'}
                            />
                            {touched.password && errors.password && <div className={s.error}>{errors.password}</div>}
                        </div>
                        <div className={s.formGroup}>
                            <label htmlFor="password"> Запомнить меня</label>
                            <Field type="checkbox" name="rememberMe"/></div>
                        <div>
                            <button className={s.button} type="submit">Войти</button>
                        </div>
                        <div className={s.error}>
                            {status}
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};


let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth
}) as MapStatePropsType

// @ts-ignore
export default connect(mapStateToProps, {login})(Login)