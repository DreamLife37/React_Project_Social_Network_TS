import s from './Profile.module.css'
import React, {JSXElementConstructor} from "react";
import {Profile} from "./Profile";
import {connect, useDispatch} from "react-redux";
import {AppStateType, useAppSelector} from "../../redux/redux-store";
import {getStatusProfile, getUserProfile, ProfileType, updateStatus} from '../../redux/profile-reducer';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {withAuthRedirect} from "../hoc/WithAuthRedirect";
import {compose} from "redux";


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
    status: string
    // authUserId: null | number,
    // isAuth: boolean
    updateStatus: (status: string) => void
}


export const ProfileContainer = () => {
    const dispatch = useDispatch()
    const profile = useAppSelector(state => state.profilePage.profile)
    const status = useAppSelector(state => state.profilePage.status)
    const params = useParams<"id">()
    const updateStatusCallback = (status: string) => {
        dispatch(updateStatus(status))
    }
    console.log(params)

    return <div className={s.content}>
        <Profile profile={profile} status={status}
                 updateStatus={updateStatusCallback}/>
    </div>
}


let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authUserId: state.auth.id,
    isAuth: state.auth.isAuth
}) as MapStatePropsType

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

// export default compose<React.FC>(
//     connect(mapStateToProps,
//         {getUserProfile, getStatusProfile, updateStatus}),
//     withRouter,
//     withAuthRedirect
// )(ProfileContainer)