import React, {useEffect} from 'react';
import s from './ProfileSettings.module.css'
import {FormProfileSettings} from "./FormProfileSettings/FormProfileSettings";
import {useDispatch, useSelector} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {getAuthUserData} from "../../redux/auth-reducer";
import {initializeApp} from "../../redux/app-reducer";
import {AppStateType, useAppSelector} from "../../redux/redux-store";
import {Navigate} from "react-router-dom";
import {Preloader} from "../common/Preloader/Preloader";

export const ProfileSettings = () => {
    const isAuth = useAppSelector(state => state.auth.isAuth)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAuthUserData())
        dispatch(initializeApp())
    }, [dispatch])

    const profile = useSelector<AppStateType>(state => state.profilePage.profile)

    if (!profile) {
        return <Preloader/>
    }

    if (!isAuth) return <Navigate to="/login"/>

    return <div>
        <div className={s.newPostContainer}>
            <FormProfileSettings/>
        </div>
        <div className={s.posts}>
        </div>

    </div>
}



