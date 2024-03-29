import React, {useEffect} from 'react';
import s from './ProfileSettings.module.css'
import {FormProfileSettings} from "./FormProfileSettings/FormProfileSettings";
import {useDispatch, useSelector} from "react-redux";
import {getMyProfile} from "../../redux/auth-reducer";
import {AppStateType, useAppSelector} from "../../redux/redux-store";
import {Navigate} from "react-router-dom";

export const ProfileSettings = () => {
    const isAuth = useAppSelector(state => state.auth.isAuth)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMyProfile())
    }, [dispatch])

    if (!isAuth) return <Navigate to="/login"/>

    return <div>
        <div className={s.newPostContainer}>
            <FormProfileSettings/>
        </div>
        <div className={s.posts}>
        </div>

    </div>
}



