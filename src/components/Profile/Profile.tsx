import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfilePropsType} from './ProfileContainer';


export const Profile = (props: ProfilePropsType) => {
    return <div className={s.content}>
        <ProfileInfo profile={props.profile}/>
        <MyPostsContainer/>
    </div>
}