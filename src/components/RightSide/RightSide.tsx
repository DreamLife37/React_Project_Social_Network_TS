import s from './RightSide.module.css'
import React, {useEffect, useState} from "react";
import {useAppSelector} from "../../redux/redux-store";
import {usersAPI} from "../../api/api";
import {UserType} from "../../redux/users-reducer";

export const RightSide = () => {

    const [tempUsers, setTempUser] = useState<Array<UserType>>([])
    console.log(tempUsers)
    useEffect(() => {
        usersAPI.getUsers(1, 100, '', true).then(r => {
            setTempUser(r.items)
        })
    }, [])

    const isAuth = useAppSelector(state => state.auth.isAuth)

    return <div className={s.wrapper}>
        {tempUsers && tempUsers.map((friend) => <div>{friend.name}</div>)
        }

    </div>
}


