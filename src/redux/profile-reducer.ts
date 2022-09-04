import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS_PROFILE = 'SET_STATUS_PROFILE';

export type ProfilePageType = {
    posts: Array<PostType>
    profile: null | ProfileType
    status: string
}

export type ProfileType = {
    userId: number
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: {
        small: string
        large: string
    }
}

type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

type PostType = {
    id: number
    message: string
    likesCount: number
}

//Автоматическая типизация AC на основе возвращаемого значения функции AC
export type ActionsProfileTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatusProfile>

let initialState = {
    posts: [
        {id: 1, message: 'Hello world', likesCount: 10},
        {id: 2, message: 'I like It-incubator', likesCount: 56},
        {id: 3, message: 'I learn React', likesCount: 35},
        {id: 4, message: 'I learn CSS', likesCount: 55},
    ],
    profile: null,
    status: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsProfileTypes): ProfilePageType => {
    switch (action.type) {
        case ADD_POST: {
            // @ts-ignore
            const post = {id: 5, message: action.newText, likesCount: 205}
            return {...state, posts: [...state.posts, post]}
        }
        case SET_USER_PROFILE: {
            // @ts-ignore
            return {...state, profile: action.profile}
        }
        case SET_STATUS_PROFILE: {
            return {...state, status: action.status}
        }
        default:
            return state
    }
}

export const addPostActionCreator = (newText: string) => {
    return {
        type: ADD_POST, newText: newText
    } as const
}

export const setUserProfile = (profile: ProfileType) => {
    return {
        type: SET_USER_PROFILE, profile
    } as const
}

const setStatusProfile = (status: string) => {
    return {
        type: SET_STATUS_PROFILE, status
    }
}

export const getUserProfile = (userId: number) => {  //ThunkCreator
    return (dispatch: Dispatch<ActionsProfileTypes>) => {
        usersAPI.getProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data))
            })
    }
}

export const getStatusProfile = (userId: number) => (dispatch: Dispatch<ActionsProfileTypes>) => {
    profileAPI.getStatus(userId)
        .then((res) => {
            dispatch(setStatusProfile(res.data))
        })
}

export const updateStatus = (status: string) => (dispatch: Dispatch<ActionsProfileTypes>) => {
    profileAPI.updateStatus(status)
        .then((res) => {
            dispatch(setStatusProfile(status))
        })
}