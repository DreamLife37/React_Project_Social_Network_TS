import s from './Profile.module.css'
import React, {JSXElementConstructor} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfile, ProfileType} from '../../redux/profile-reducer';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {withAuthRedirect} from "../hoc/WithAuthRedirect";


type MapStatePropsType = {
    profile: null | ProfileType
}

type MapDispatchPropsType = {
    getUserProfile: (userId: number) => void
}

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType

export class ProfileContainer extends React.Component<ProfilePropsType> {
    componentDidMount() {
        // @ts-ignore
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfile(userId)
    }

    render() {

        return <div className={s.content}>
            <Profile {...this.props} profile={this.props.profile}/>
        </div>
    }
}

let WithAuthRedirectComponent =withAuthRedirect(ProfileContainer)

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
})

//оболочка для классовой компонеты
export const withRouter = (Component: JSXElementConstructor<any>): JSXElementConstructor<any> => {
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

export const ProfileContainerToStore = connect(mapStateToProps, {
    getUserProfile
})(withRouter(WithAuthRedirectComponent))