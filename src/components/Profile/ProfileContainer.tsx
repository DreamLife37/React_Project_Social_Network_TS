import s from './Profile.module.css'
import React, {JSXElementConstructor, useEffect} from "react";
import {Profile} from "./Profile";
import {useDispatch} from "react-redux";
import {Nullable, useAppSelector} from "../../redux/redux-store";
import {getStatusProfile, getUserProfile, ProfileType, updateStatus} from '../../redux/profile-reducer';
import {Navigate, useLocation, useNavigate, useParams} from "react-router-dom";
import {getMyProfile} from "../../redux/auth-reducer";


export type ProfilePropsType = {
    profile: null | ProfileType
    status: Nullable<string>
    updateStatus: (status: string) => void
}


export const ProfileContainer = () => {
    const dispatch = useDispatch()
    const profile = useAppSelector(state => state.profilePage.profile)
    const status = useAppSelector(state => state.profilePage.status)
    const isFollowed = useAppSelector(state => state.profilePage.isFollowed)
    const isAuth = useAppSelector(state => state.auth.isAuth)

    const params = useParams<"userId">()

    const updateStatusCallback = (status: string) => {
        dispatch(updateStatus(status))
    }

    useEffect(() => {
        if (params.userId !== undefined) {
            dispatch(getUserProfile(Number(params.userId)))
            dispatch(getStatusProfile(Number(params.userId)))
        } else {
            dispatch(getMyProfile())
        }
    }, [dispatch, params.userId])

    if (!isAuth) return <Navigate to="/login"/>

    return <div className={s.content}>
        <Profile profile={profile} status={status}
                 updateStatus={updateStatusCallback}/>
    </div>
}


//оболочка для классовой компонеты
export const withRouter = (Component: React.FC<any>): JSXElementConstructor<any> => {
    function ComponentWithRouterProp(props: any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}

