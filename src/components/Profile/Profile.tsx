import {MyPosts} from "./MyPosts/MyPosts";
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes} from "../../redux/state";

type PostPropsType = {
    id: number,
    message: string
    likesCount: number
}

type ProfilePropsType = {
    posts: Array<PostPropsType>
    newPostText: string
    dispatch: (action: ActionsTypes) => void

}

export const Profile = (props: ProfilePropsType) => {
    return <div className={s.content}>
        <ProfileInfo/>
        <MyPosts postData={props.posts}
                 dispatch={props.dispatch}
                 newPostText={props.newPostText}
        />
    </div>
}