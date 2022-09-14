import s from './RightSide.module.css'
import React, {useEffect} from "react";
import {useAppSelector} from "../../redux/redux-store";
import {fetchMyFriends} from "../../redux/profile-reducer";
import {useDispatch} from "react-redux";
import userAvatarDefault from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";

export const RightSide = () => {
    const dispatch = useDispatch()
    const myFriends = useAppSelector(state => state.profilePage.myFriends)

    useEffect(() => {
        dispatch(fetchMyFriends())
    }, [])

    return <div className={s.wrapperMyFriends}>
        <div className={s.title}>Мои друзья</div>
        {myFriends && myFriends.map((friend) => <div key={friend.id} className={s.wrapperMyFriends}>
            <NavLink to={'/profile/' + friend.id} className={s.link}>
                <div className={s.wrapperAvatar}>{friend.photos.large
                    ? <img className={s.userAvatar} src={friend.photos.large}/>
                    : <img className={s.userAvatar} src={userAvatarDefault}/>}</div>
                <div className={s.name}>{friend.name}</div>
            </NavLink>
        </div>)
        }

    </div>
}


