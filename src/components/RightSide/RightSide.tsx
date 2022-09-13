import s from './RightSide.module.css'
import React, {useEffect, useState} from "react";
import {useAppSelector} from "../../redux/redux-store";
import {usersAPI} from "../../api/api";
import {UserType} from "../../redux/users-reducer";
import {fetchMyFriends} from "../../redux/profile-reducer";
import {useDispatch} from "react-redux";
import userAvatarDefault from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";

export const RightSide = () => {
    const dispatch = useDispatch()
    const myFriends = useAppSelector(state => state.profilePage.myFriends)
    console.log(myFriends)

    useEffect(() => {
        dispatch(fetchMyFriends())
    }, [])

    return <div className={s.wrapperMyFriends}>
        {myFriends && myFriends.map((friend) => <div className={s.wrapperMyFriends}>
            <NavLink to={'/profile/' + friend.id} className={s.link}>
                <div>{friend.name}</div>
                <div className={s.wrapperAvatar}>{friend.photos.large
                    ? <img className={s.userAvatar} src={friend.photos.large}/>
                    : <img className={s.userAvatar} src={userAvatarDefault}/>}</div>
            </NavLink>
        </div>)
        }

    </div>
}


