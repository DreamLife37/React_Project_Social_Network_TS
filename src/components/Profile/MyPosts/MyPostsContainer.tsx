import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from '../../../redux/profile-reducer';
import {MyPosts} from "./MyPosts";
import {ReduxStoreType} from "../../../redux/redux-store";

type MyPostsPropsType = {
    store: ReduxStoreType
}

export const MyPostsContainer = (props: MyPostsPropsType) => {

    let state = props.store.getState().profileReducer

    const onClickAddPostHandler = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let onChangePostHandler = (newText: string) => {
        props.store.dispatch(updateNewPostActionCreator(newText))
    }

    return <MyPosts addPost={onClickAddPostHandler}
                    updateNewPostText={onChangePostHandler}
                    postData={state.posts}
                    newPostText={state.newPostText}/>
}