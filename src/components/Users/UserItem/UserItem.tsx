import React from "react";
import s from "./UserItem.module.css";
import userPhoto from "../../../assets/images/user.jpg";
import {NavLink} from "react-router-dom";
import {UserType} from "../../../redux/users-reducer";

type UsersPropsType = {
    users: Array<UserType>
    followingInProgress: Array<number>
    unFollow: (userId: number) => void
    follow: (userId: number) => void
}

export const UserItem = (props: UsersPropsType) => {

    return <div className={s.userContainer}>
        {props.users.map(u => <div key={u.id} className={s.userItems}>

            <NavLink to={'/profile/' + u.id} className={s.link}>
                <img className={s.avatar}
                     src={u.photos.small === null
                         ? userPhoto
                         : u.photos.small}/>
                <div className={s.name}>{u.name && u.name.length > 14 ? u.name.substr(0, 13) : u.name}</div>
            </NavLink>

            <div className={s.status}>{u.status && u.status.length > 14 ? u.status.substr(0, 16) : u.status}</div>

            <div className={s.buttonWrapper}>{u.followed
                ? <button className={s.buttonFollowing}
                          disabled={props.followingInProgress.some((id: number) => id === u.id)}
                          onClick={() => {
                              props.unFollow(u.id)
                          }}>Following</button>

                : <button className={s.button} disabled={props.followingInProgress.some((id: number) => id === u.id)}
                          onClick={() => {
                              props.follow(u.id)
                          }
                          }>+Follow</button>}</div>
        </div>)}
    </div>
}

