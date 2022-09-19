import React from "react";
import s from './SearchItem.module.css'
import {UserType} from "../../../../redux/users-reducer";
import {NavLink} from "react-router-dom";

type UsersType = {
    searchUsers: Array<UserType>
    valueSearch: string
    isComponentVisible: boolean
    setIsComponentVisible: (isVisible: boolean) => void
}

export const SearchItem = (props: UsersType) => {

    return <div
                className={`${s.container} ${props.valueSearch && s.show} ${props.isComponentVisible && s.active}`}
    >
        <ul>
            {props.searchUsers.map((user) =>
                <NavLink to={'/profile/' + user.id} className={s.link} key={user.id}>
                    <li  onClick={() => props.setIsComponentVisible(false)}>{user.name}</li>
                </NavLink>
            )}
        </ul>
        {props.searchUsers.length === 0 && <div className={s.userNotFound}>Пользователи не найдены</div>}
    </div>
}