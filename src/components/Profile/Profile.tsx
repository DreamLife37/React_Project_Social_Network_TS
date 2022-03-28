import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

export const Profile = () => {
    return <div className={s.content}>
        <ProfileInfo/>
        <MyPostsContainer/>
    </div>
}