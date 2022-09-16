import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import {Preloader} from "../../common/Preloader/Preloader";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType, useAppSelector} from "../../../redux/redux-store";
import s from "./ProfileInfo.module.css";
import userAvatarDefault from "../../../assets/images/user.png";
import React, {useEffect} from "react";
import {SvgSelector} from "../../common/Utils/svgSelector";
import {fetchMyFriends, getUserProfile} from "../../../redux/profile-reducer";
import {follow, unFollow} from "../../../redux/users-reducer";
import {useParams} from "react-router-dom";


type ProfileInfo = {
    updateStatus?: (status: string) => void
}

export const ProfileInfo = (props: ProfileInfo) => {

    const dispatch = useDispatch()
    const profile = useSelector<AppStateType>(state => state.profilePage.profile)
    const status = useSelector<AppStateType>(state => state.profilePage.status)
    const largePhoto = useSelector((state: AppStateType) => state.profilePage.profile?.photos.large)
    const smallPhoto = useSelector((state: AppStateType) => state.profilePage.profile?.photos.small)
    const fullName = useSelector((state: AppStateType) => state.profilePage.profile?.fullName)
    const aboutMe = useSelector((state: AppStateType) => state.profilePage.profile?.aboutMe)
    const lookingForAJob = useSelector((state: AppStateType) => state.profilePage.profile?.lookingForAJob)
    const vk = useSelector((state: AppStateType) => state.profilePage.profile?.contacts.vk)
    const jobSearch = useAppSelector(state => state.profilePage.profile?.lookingForAJob)
    const followingInProgress = useAppSelector(state => state.usersPage.followingInProgress)
    const isFollowed = useAppSelector(state => state.profilePage.isFollowed)
    const userId = useAppSelector(state => state.profilePage.profile?.userId)
    const myId = useAppSelector(state => state.auth.id)

    const followCallback = () => {
        dispatch(follow(userId))
    }

    const unFollowCallback = () => {
        dispatch(unFollow(userId))
    }

    if (!profile) {
        return <Preloader/>
    }
    return (
        <div className={s.profileInfo}>
            <div className={s.wrapperAvatar}>{largePhoto
                ? <img className={s.userAvatar} src={largePhoto}/>
                : <img className={s.userAvatar} src={userAvatarDefault}/>}</div>
            {jobSearch && <SvgSelector id={'searchJob'}/>}
            <div className={s.name}>{fullName}</div>
            {myId!==userId && <div className={s.buttonWrapper}>
                {isFollowed
                    ? <button className={s.buttonFollowing}

                              onClick={unFollowCallback}>Подписан</button>

                    : <button className={s.button}
                              onClick={followCallback}>+Подписаться</button>}
            </div>}
            <div className={s.content}>
                <br/>About me: {aboutMe}
                <br/>Contacts: {vk}
                <br/>Looking for a job? {lookingForAJob ? 'Yes' : 'No'}
                <br/> <ProfileStatusWithHooks status={status} updateStatus={props.updateStatus}/></div>
        </div>
    )
}
