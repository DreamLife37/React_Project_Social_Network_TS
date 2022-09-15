import React, {useState} from "react";
import s from './SearchItem.module.css'
import {UserType} from "../../../../redux/users-reducer";
import {useAppSelector} from "../../../../redux/redux-store";
import {NavLink} from "react-router-dom";

type UsersType = {
    searchUsers: Array<UserType>
    valueSearch: string
    isVisible:boolean
    setIsVisible: (isVisible:boolean)=> void
}

export const SearchItem = (props: UsersType) => {


    //const [tempUser, setTempUser] = useState('')
    console.log(props.searchUsers.length)
    return <div className={`${s.container} ${props.valueSearch && s.show} ${props.isVisible && s.active}`}
                onClick={()=> props.setIsVisible(false)}
    onBlur={()=> props.setIsVisible(true)}>
        <ul>
            {props.searchUsers.map((user) =>
                <NavLink to={'/profile/' + user.id} className={s.link}>
                    <li key={user.id}>{user.name}</li>
                </NavLink>
            )}
        </ul>
        {props.searchUsers.length == 0 && <div className={s.userNotFound}>Пользователи не найдены</div>}
    </div>
}