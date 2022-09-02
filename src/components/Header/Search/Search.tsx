import React from "react";
import s from './Search.module.css'
import searchIcon from '../../../assets/images/iconsSearch.svg'


export const Search = (props: any) => {
    return <div className={s.container}>
        <div className={s.searchContainer}>
            <input className={s.search} placeholder={'Поиск по пользователям'}/>
            <div className={s.searchIcon}>
                <img src={searchIcon} alt={'Icon search'}/>
            </div>
        </div>
    </div>
}