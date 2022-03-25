import React from 'react';
import {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ActionsTypes} from "../../../redux/store";
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/profile-reducer';


type postDataType = {
    id: number,
    message: string
    likesCount: number
}
type MyPostsPropsType = {
    postData: Array<postDataType>
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

export const MyPosts = (props: MyPostsPropsType) => {
    let postsElement = props.postData.map(p => {
        return <Post key={p.id} message={p.message} likeCount={p.likesCount}/>
    })

    //let newPostElement = React.createRef<HTMLTextAreaElement>() //переменная которая будет содержать ссылку

    const onClickAddPostHandler = () => {
        //let bodyMessage = newPostElement.current?.value
        props.dispatch(addPostActionCreator())
    }

    let onChangePostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // let bodyMessage = newPostElement.current?.value
        let newText = e.currentTarget.value
        //  props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text})
        props.dispatch(updateNewPostActionCreator(newText))
        console.log('value' + props.newPostText)
        console.log(e.currentTarget.value)
        // console.log(newPostElement.current?.value)
    }

    return <div>
        <h3>My posts</h3>
        <div><textarea value={props.newPostText} onChange={onChangePostHandler}></textarea>
        </div>
        {/*привязка ссылки к конкретному элементу*/}

        <button onClick={onClickAddPostHandler}>Add post</button>
        <div className={s.posts}>
            {postsElement}
        </div>

    </div>
}