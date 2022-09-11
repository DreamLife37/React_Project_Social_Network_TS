import React, {useEffect, useState} from "react";
import s from './Search.module.css'
import searchIcon from '../../../assets/images/iconsSearch.svg'
import {usersAPI} from "../../../api/api";


export const Search = (props: any) => {
    const [tempUser, setTempUser] = useState('')
    console.log(tempUser)
    useEffect(() => {
        usersAPI.getUsers(1, 10, tempUser).then(r => console.log(r))
    },[tempUser])
    return <div className={s.container}>
        <div className={s.searchContainer}>
            <input onChange={(e) => setTempUser(e.currentTarget.value)}
                   className={s.search}
                   placeholder={'Поиск по пользователям'} value={tempUser}/>
            <div className={s.searchIcon}>
                <img src={searchIcon} alt={'Icon search'}/>
            </div>
        </div>
    </div>
}