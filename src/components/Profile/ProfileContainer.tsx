import s from './Profile.module.css'
import React, {JSXElementConstructor} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
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

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType


export class ProfileContainer extends React.Component<ProfilePropsType> {
    componentDidMount() {

        // @ts-ignore
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = this.props.authUserId
        }

        this.props.getUserProfile(userId)
        this.props.getStatusProfile(userId)
    }

    render() {
        return <div className={s.content}>
            <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
        </div>
    }
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

export default compose<React.FC>(
    connect(mapStateToProps,
        {getUserProfile, getStatusProfile, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)