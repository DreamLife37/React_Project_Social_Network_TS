import React, {MouseEventHandler, useState} from "react";
import s from './Search.module.css'
import searchIcon from '../../../assets/images/iconsSearch.svg'
import {SearchItem} from "./SearchItem/SearchItem";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../../redux/redux-store";
import {getSearchUsers} from "../../../redux/users-reducer";
import {useDebouncedEffect} from "../../../customHooks/CustomHooks";
import {Preloader} from "../../common/Preloader/Preloader";

export const Search = () => {
    const [valueSearch, setValueSearch] = useState('')

    const dispatch = useDispatch()
    const searchUsers = useAppSelector(state => state.usersPage.searchUsers)
    const isFetching = useAppSelector(state => state.usersPage.isFetching)

    useDebouncedEffect(() => {
        if (!valueSearch.trim()) {
            return
        }
        dispatch(getSearchUsers(1, 18, valueSearch))
    }, [valueSearch], 1000);

    //console.log(searchUsers)

    const [isVisible, setIsVisible] = useState(true)

    return <div className={s.container}>
        <div className={s.searchContainer}>
            <input onChange={(e) => setValueSearch(e.currentTarget.value)}
                   className={s.search}
                   placeholder={'Поиск по пользователям'} value={valueSearch}/>
            <div className={s.searchIcon}>
                <img src={searchIcon} alt={'Icon search'}/>
            </div>
        </div>
        {isFetching
            ? <Preloader/>
            : null}
        <SearchItem isVisible={isVisible} setIsVisible={setIsVisible} searchUsers={searchUsers}
                    valueSearch={valueSearch}/>

    </div>
}