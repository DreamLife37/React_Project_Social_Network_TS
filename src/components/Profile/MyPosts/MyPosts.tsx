import React from 'react';
import {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";

export const MyPosts = (props: MyPostsPropsType) => {
    let postsElement = props.profilePage.posts.map(p => {
        return <Post key={p.id} message={p.message} likeCount={p.likesCount}/>
    })

    const addPost = () => {
        props.addPost();
    }

    let updateNewPostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value
        props.updateNewPostText(newText)
    }

    return <div>
        <h3>My posts</h3>
        <div><textarea value={props.profilePage.newPostText} onChange={updateNewPostText}></textarea>
        </div>
        {/*привязка ссылки к конкретному элементу*/}

        <button onClick={addPost}>Add post</button>
        <div className={s.posts}>
            {postsElement}
        </div>

    </div>
}