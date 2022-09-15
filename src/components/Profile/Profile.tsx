import s from './Profile.module.css'
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfilePropsType} from "./ProfileContainer";
//import {ProfilePropsType} from './ProfileContainer';

export const Profile = (props: ProfilePropsType) => {

    return <div className={s.content}>
        <MyPostsContainer/>
    </div>
}