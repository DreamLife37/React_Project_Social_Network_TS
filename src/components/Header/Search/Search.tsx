import React from "react";
import s from './Search.module.css'


export const Search = (props: any) => {
    return <div className={s.container}><input className={s.search} placeholder={'Поиск по пользователям'}/></div>
}