import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import {Preloader} from "../../common/Preloader/Preloader";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType, useAppSelector} from "../../../redux/redux-store";
import s from "./ProfileInfo.module.css";
import userAvatarDefault from "../../../assets/images/user.png";
import React, {ChangeEvent} from "react";
import {savePhoto} from "../../../redux/profile-reducer";
import {follow, unFollow} from "../../../redux/users-reducer";


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

    let readyToWorkValue

    if (aboutMe || status) {
        readyToWorkValue = '25%'
    }

    if (aboutMe && (lookingForAJob || status)) {
        readyToWorkValue = '50%'
    }

    if (aboutMe && (lookingForAJob || profile?.photos.large && status)) {
        readyToWorkValue = '75%'
    }

    if (aboutMe && lookingForAJob && profile?.photos.large && status) {
        readyToWorkValue = '100%'
    }

    if (!profile) {
        return <Preloader/>
    }

    const condition = (readyToWorkValue === '25%' && s.progressBar25)
        || (readyToWorkValue === '50%' && s.progressBar50)
        || (readyToWorkValue === '75%' && s.progressBar75)
        || (readyToWorkValue === '100%' && s.progressBar100)

    return (
        <div className={s.profileInfo}>

            {profile && <>
                <div className={s.wrapperAvatar}>
                    <img className={s.userAvatar} src={profile.photos.large || userAvatarDefault}/>
                </div>
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


                <div className={s.containerBar}>
                    <div className={s.titleBar}>Готовность к работе</div>
                    <div className={s.progress}>
                        <div className={`${s.progressBar} ${condition}`}>{readyToWorkValue}</div>
                    </div>
                </div>


                <div className={s.content}>
                    {aboutMe && <div>Обо мне: {aboutMe}</div>}
                    {profile.contacts.vk && <div>Контакты: {profile.contacts.vk}</div>}
                    {lookingForAJob && <div>В поисках работы: {lookingForAJob ? 'Да' : 'Нет'}</div>}

                    {(myId === userId)
                        ? <ProfileStatusWithHooks status={status} updateStatus={props.updateStatus}/>
                        : status && <ProfileStatusWithHooks status={status} updateStatus={props.updateStatus}/>}
                </div>
            </>}
        </div>
    )
}
