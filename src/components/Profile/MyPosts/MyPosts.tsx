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
    newPostText: string
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

export const MyPosts = (props: MyPostsPropsType) => {
    let postsElement = props.postData.map(p => {
        return <Post key={p.id} message={p.message} likeCount={p.likesCount}/>
    })

    //let newPostElement = React.createRef<HTMLTextAreaElement>() //переменная которая будет содержать ссылку

    const addPost = () => {
        props.addPost();
    }

    let updateNewPostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value
        props.updateNewPostText(newText)
    }

    return <div>
        <h3>My posts</h3>
        <div><textarea value={props.newPostText} onChange={updateNewPostText}></textarea>
        </div>
        {/*привязка ссылки к конкретному элементу*/}

        <button onClick={addPost}>Add post</button>
        <div className={s.posts}>
            {postsElement}
        </div>

    </div>
}