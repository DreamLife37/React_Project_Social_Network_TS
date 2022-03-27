import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ReduxStoreType} from "../../redux/redux-store";

type ProfilePropsType = {
   // store: ReduxStoreType
}

export const Profile = (props: ProfilePropsType) => {
    return <div className={s.content}>
        <ProfileInfo/>
        <MyPostsContainer />
    </div>
}