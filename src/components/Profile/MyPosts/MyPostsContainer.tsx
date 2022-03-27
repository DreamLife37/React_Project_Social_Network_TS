import React from 'react';
import {addPostActionCreator, ProfilePageType, updateNewPostActionCreator} from '../../../redux/profile-reducer';
import {MyPosts} from "./MyPosts";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from 'react-redux';
import {Dispatch} from "redux";

type MapStateToProps = {
    profilePage: ProfilePageType
}

type MapDispatchToProps = {
    addPost: () => void,
    updateNewPostText: (newText: string) => void
}

export type MyPostsPropsType = MapStateToProps & MapDispatchToProps
let mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        profilePage: state.profilePage
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (newText: string) => {
            dispatch(updateNewPostActionCreator(newText))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)