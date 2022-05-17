import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: Array<UserType>
    followingInProgress: Array<number>
    unFollow: (userId: number) => void
    follow: (userId: number) => void
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
            <NavLink to={'/profile/' + u.id}><img
                src={u.photos.small === null ? userPhoto : u.photos.small}/></NavLink>
            <div>{u.followed
                ? <button disabled={props.followingInProgress.some((id: number) => id === u.id)} onClick={() => {
                    props.unFollow(u.id)
                }}>Unfollow</button>

                : <button disabled={props.followingInProgress.some((id: number) => id === u.id)} onClick={() => {
                    props.follow(u.id)
                }
                }>Follow</button>}</div>
        </div>)}
    </div>
}

