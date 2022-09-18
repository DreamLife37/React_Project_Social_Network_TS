import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import {Preloader} from "../../common/Preloader/Preloader";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType, useAppSelector} from "../../../redux/redux-store";
import s from "./ProfileInfo.module.css";
import userAvatarDefault from "../../../assets/images/user.png";
import React, {ChangeEvent, ChangeEventHandler, useEffect} from "react";
import {SvgSelector} from "../../common/Utils/svgSelector";
import {fetchMyFriends, getStatusProfile, getUserProfile, savePhoto} from "../../../redux/profile-reducer";
import {follow, unFollow} from "../../../redux/users-reducer";
import {useParams} from "react-router-dom";
import {getMyProfile} from "../../../redux/auth-reducer";
import {profileAPI} from "../../../api/api";


type ProfileInfo = {
    updateStatus?: (status: string) => void
}

export const ProfileInfo = (props: ProfileInfo) => {
    const dispatch = useDispatch()

    const profile = useAppSelector(state => state.profilePage.profile)
    const status = useSelector<AppStateType>(state => state.profilePage.status)
    const fullName = useSelector((state: AppStateType) => state.profilePage.profile?.fullName)
    const aboutMe = useSelector((state: AppStateType) => state.profilePage.profile?.aboutMe)
    const lookingForAJob = useSelector((state: AppStateType) => state.profilePage.profile?.lookingForAJob)
    const isFollowed = useAppSelector(state => state.profilePage.isFollowed)
    const userId = useAppSelector(state => state.profilePage.profile?.userId)
    const myId = useAppSelector(state => state.auth.id)

    const followCallback = () => {
        dispatch(follow(userId))
    }

    const unFollowCallback = () => {
        dispatch(unFollow(userId))
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            dispatch(savePhoto(e.target.files[0]))
        }
    }

    if (!profile) {
        return <Preloader/>
    }
    return (
        <div className={s.profileInfo}>

            {profile && <>
                <div className={s.wrapperAvatar}>
                    <img className={s.userAvatar} src={profile.photos.large || userAvatarDefault}/>
                </div>
                {/*{jobSearch && <SvgSelector id={'searchJob'}/>}*/}
                {myId === userId && <><input type='file' className={s.setAvatarInput} id='fileInput'
                                             onChange={onMainPhotoSelected}/>
                    <label className={s.setAvatarInputLabel} htmlFor='fileInput'/></>}

                <div className={s.name}>{fullName}</div>
                {myId !== userId && <div className={s.buttonWrapper}>
                    {isFollowed
                        ? <button className={s.buttonFollowing}

                                  onClick={unFollowCallback}>Подписан</button>

                        : <button className={s.button}
                                  onClick={followCallback}>+Подписаться</button>}
                </div>}
                <div className={s.content}>
                    {aboutMe && <div>Обо мне: {aboutMe}</div>}
                    {profile.contacts.vk && <div>Контакты: {profile.contacts.vk}</div>}
                    {lookingForAJob && <div>В поисках работы: {lookingForAJob ? 'Да' : 'Нет'}</div>}
                    {status && <ProfileStatusWithHooks status={status} updateStatus={props.updateStatus}/>}
                </div>
            </>}
        </div>
    )
}
