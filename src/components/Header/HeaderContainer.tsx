import React from "react";
import {connect} from "react-redux";
import {Header} from "./Header";
import {AppStateType} from "../../redux/redux-store";
import {getAuthUserData, setUserData, setUserPhoto} from "../../redux/auth-reducer";


export class HeaderContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

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
}

export type HeaderPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        photo: state.auth.photo
    }
}

export const HeaderContainerToStore = connect(mapStateToProps, {getAuthUserData})(HeaderContainer)