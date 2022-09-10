import {Navbar} from "./Navbar/Navbar"
import {ProfileInfo} from "../Profile/ProfileInfo/ProfileInfo";
import s from './LeftSide.module.css'
import React from "react";
import {useAppSelector} from "../../redux/redux-store";

export const LeftSide = () => {

    const isAuth = useAppSelector(state => state.auth.isAuth)

    return <div className={s.wrapper}>

        {isAuth && <div className={s.profileInfo}><ProfileInfo/></div>}
        <Navbar/>
    </div>
}


