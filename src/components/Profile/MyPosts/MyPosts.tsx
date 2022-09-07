import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {FormFormik} from '../../common/FormFormik/FormFormik';

export const MyPosts = (props: MyPostsPropsType) => {
    let postsElement = props.profilePage.posts.map(p => {
        return <Post key={p.id} id={p.id} message={p.message} likeCount={p.likesCount}/>
    })

    const addPost = (newText: string) => {
        props.addPost(newText);
    }

    return <div>

        <div className={s.newPostContainer}><FormFormik onSubmit={addPost}/></div>
        <div className={s.posts}>
            {postsElement}
        </div>

    </div>
}



