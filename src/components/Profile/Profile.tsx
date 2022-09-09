import s from './Profile.module.css'
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfilePropsType} from './ProfileContainer';
import {useEffect} from "react";
import {initializeApp} from "../../redux/app-reducer";
import {useDispatch} from "react-redux";
import {getAuthUserData} from "../../redux/auth-reducer";


export const Profile = (props: ProfilePropsType) => {

    return <div className={s.content}>
                <MyPostsContainer/>
    </div>
}