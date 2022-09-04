import { Navbar } from "./Navbar/Navbar"
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import { ProfileInfo } from "../Profile/ProfileInfo/ProfileInfo";
import s from './LeftSide.module.css'
import userAvatarDefault from "../../assets/images/user.jpg";
import React from "react";

export const LeftSide = () => {

    const profile = useSelector<AppStateType>(state => state.profilePage.profile)
    const status = useSelector<AppStateType>(state => state.profilePage.status)

    return <div>
        <img className={s.userAvatar} src={userAvatarDefault}/>
       <div className={s.profileInfo}><ProfileInfo profile={profile} status={status} /></div>
        <Navbar/>
    </div>
}


