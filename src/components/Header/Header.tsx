import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {HeaderPropsType} from "./HeaderContainer";
import userAvatarDefault from './../../assets/images/user.jpg'

export const Header = (props: HeaderPropsType) => {
    return <header className={s.header}>
        Header
        <div className={s.loginBlock}>
            {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            {props.isAuth ? (props.login, props.photo ? <img src={props.photo}/> : <img className={s.userAvatar} src={userAvatarDefault}/> ) : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}