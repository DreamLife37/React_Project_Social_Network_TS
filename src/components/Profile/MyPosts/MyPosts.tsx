import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {FormFormik} from './FormFormik/FormFormik';

export const MyPosts = (props: MyPostsPropsType) => {

    let postsElement = props.profilePage.posts.map(p => {
        return <Post key={p.id} post={p}/>
    })

    const addPost = (newText: string) => {
        props.addPost(newText);
    }

    return <div>
        <div className={s.newPostContainer}><FormFormik onSubmit={addPost}/>
        </div>
        <div className={s.posts}>
            {postsElement}
        </div>
    </div>
}



