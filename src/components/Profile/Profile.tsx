import {MyPosts} from "./MyPosts/MyPosts";
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

type PostPropsType = {
    id: number,
    message: string
    likesCount: number
}

type ProfilePropsType = {
    posts: Array<PostPropsType>
}

export const Profile = (props: ProfilePropsType) => {
    return <div className={s.content}>
        <ProfileInfo/>
        <MyPosts postData={props.posts}/>
    </div>
}