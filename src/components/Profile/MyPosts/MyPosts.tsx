import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {FormFormik} from '../../common/FormFormik/FormFormik';
import {useAppSelector} from "../../../redux/redux-store";

export const MyPosts = (props: MyPostsPropsType) => {
    const isAuth = useAppSelector(state => state.auth.isAuth)

    let postsElement = props.profilePage.posts.map(p => {
        return <Post key={p.id} post={p}/>
    })

    const addPost = (newText: string) => {
        props.addPost(newText);
    }

    return <div>

        {!isAuth
            ? <div>Данная информация доступна только авторизированным пользователям</div>
            : <>
                <div className={s.newPostContainer}><FormFormik onSubmit={addPost}/>
                </div>
                <div className={s.posts}>
                    {postsElement}
                </div>
            </>}

    </div>
}



