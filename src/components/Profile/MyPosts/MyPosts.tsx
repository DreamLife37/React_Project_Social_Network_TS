import React from 'react';
import {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

type postDataType = {
    id: number,
    message: string
    likesCount: number
}
type MyPostsPropsType = {
    postData: Array<postDataType>
}

export const MyPosts = (props: MyPostsPropsType) => {

    let postsElement = props.postData.map(p => {
        return <Post message={p.message} likeCount={p.likesCount}/>
    })

    let newPostElement = React.createRef<HTMLTextAreaElement>() //переменная которая будет содержать ссылку

    const onClickAddPostHandler = () => {
        alert(newPostElement.current?.value)
    }

    return <div>
        <h3>My posts</h3>
        <div><textarea ref={newPostElement}></textarea></div>
        {/*привязка ссылки к конкретному элементу*/}

        <button onClick={onClickAddPostHandler}>Add post</button>
        <div className={s.posts}>
            {postsElement}
        </div>

    </div>
}