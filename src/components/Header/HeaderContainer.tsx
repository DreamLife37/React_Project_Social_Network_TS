import React from "react";
import {connect} from "react-redux";
import {Header} from "./Header";
import {AppStateType} from "../../redux/redux-store";
import {logout} from "../../redux/auth-reducer";
import {compose} from "redux";


export class HeaderContainer extends React.Component<HeaderPropsType> {

    render() {
        return <>
            <Header {...this.props}/>
        </>
    }
}

type MapStateToPropsType = {
    login: string | null
    isAuth: boolean
    photo: string
}

type MapDispatchToPropsType = {
    getAuthUserData: () => void
    logout: () => void
}

export type HeaderPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        photo: state.auth.photo
    }
}


export default compose<React.FC>(
    connect(mapStateToProps, {logout})
)(HeaderContainer)