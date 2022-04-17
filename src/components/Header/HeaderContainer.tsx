import React from "react";
import {connect} from "react-redux";
import {Header} from "./Header";
import {AppStateType} from "../../redux/redux-store";
import {setUserData, setUserPhoto} from "../../redux/auth-reducer";
import axios from "axios";


export class HeaderContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    this.props.setUserData(id, email, login)
                    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + id)
                        .then(response => {
                            this.props.setUserPhoto(response.data.photos.large)
                        })
                }
            })
        console.log(this.props.photo)
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