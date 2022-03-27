import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from '../../../redux/profile-reducer';
import {MyPosts} from "./MyPosts";
import {ReduxStoreType} from "../../../redux/redux-store";
import StoreContext from '../../../StoreContext';

type MyPostsPropsType = {
    store: ReduxStoreType
}

export const MyPostsContainer = () => {
    return <StoreContext.Consumer>
        {
        (store) => {
            let state = store.getState().profileReducer
            const onClickAddPostHandler = () => {
                store.dispatch(addPostActionCreator())
            }
            let onChangePostHandler = (newText: string) => {
                store.dispatch(updateNewPostActionCreator(newText))
            }
            return <MyPosts addPost={onClickAddPostHandler}
                            updateNewPostText={onChangePostHandler}
                            postData={state.posts}
                            newPostText={state.newPostText}/>
        }

    }</StoreContext.Consumer>
}
