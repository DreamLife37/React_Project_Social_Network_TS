import s from './Profile.module.css'
import React, {JSXElementConstructor, useEffect} from "react";
import {Profile} from "./Profile";
import {connect, useDispatch} from "react-redux";
import {AppStateType, Nullable, useAppSelector} from "../../redux/redux-store";
import {getStatusProfile, getUserProfile, ProfileType, updateStatus} from '../../redux/profile-reducer';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {withAuthRedirect} from "../hoc/WithAuthRedirect";
import {compose} from "redux";
import {getMyProfile, setMyPhoto} from "../../redux/auth-reducer";


type MapStatePropsType = {
    profile: null | ProfileType
    status: string
    authUserId: null | number,
    isAuth: boolean
}

type MapDispatchPropsType = {
    getUserProfile: (userId: number) => void
    getStatusProfile: (userId: number) => void
    updateStatus: (status: string) => void
}

export type ProfilePropsType = {
    profile: null | ProfileType
    status: Nullable<string>
    // authUserId: null | number,
    // isAuth: boolean
    updateStatus: (status: string) => void
}


export const ProfileContainer = () => {
    const dispatch = useDispatch()
    const profile = useAppSelector(state => state.profilePage.profile)
    const status = useAppSelector(state => state.profilePage.status)
    const isFollowed = useAppSelector(state => state.profilePage.isFollowed)
    const avatar = useAppSelector(state => state.profilePage.profile?.photos.large)

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
            //dispatch(setMyPhoto(avatar))
        }
    }, [dispatch, params.userId,isFollowed])

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

