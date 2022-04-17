import React from "react";
import {connect} from "react-redux";
import {Header} from "./Header";
import {AppStateType} from "../../redux/redux-store";
import {setUserData, setUserPhoto} from "../../redux/auth-reducer";
import {usersAPI} from "../../api/api";

export class HeaderContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {
        usersAPI.getAuthMe()
            .then(data => {
                debugger
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data
                    this.props.setUserData(id, email, login)
                    usersAPI.getProfile(id)
                        .then(data => {
                            this.props.setUserPhoto(data.photos.large)
                        })
                }
            })
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
    setUserData: (id: number, email: string, login: string) => void
    setUserPhoto: (photo: string) => void
}

export type HeaderPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        photo: state.auth.photo
    }
}

export const HeaderContainerToStore = connect(mapStateToProps, {setUserData, setUserPhoto})(HeaderContainer)