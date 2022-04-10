import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import {UserType} from "../../redux/users-reducer";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: Array<UserType>
    setCurrentPage: (page: number) => void
    setUsers: (users: Array<UserType>) => void
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    setTotalUsersCount: (totalCount: number) => void
    onPageChanged: (page: number) => void
}

export const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(page => <span onClick={() => props.onPageChanged(page)}
                                     className={props.currentPage === page ? s.selectedPage : ''}>{page}</span>)}
        </div>
        {props.users.map(u => <div key={u.id} className={s.userItems}>
            <span className={s.name}>{u.name}</span>
            <div><span>{'u.location.country'}</span>, <span>{'u.location.city'}</span></div>
            <div>{u.status}</div>
            <img
                src={u.photos.small === null ? userPhoto : u.photos.small}/>
            <div>{u.followed
                ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                : <button onClick={() => props.follow(u.id)}>Follow</button>}</div>
        </div>)}
    </div>
}

