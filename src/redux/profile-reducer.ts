import {profileAPI, usersAPI} from "../api/api";
import imagePost1 from '../assets/images/sunny_day.jpg'
import imagePost2 from '../assets/images/office.jpg'
import imagePost3 from '../assets/images/interrior.jpg'
import imagePost4 from '../assets/images/car.jpg'
import imageDefaultPost from '../assets/images/net_foto.jpg'
import {getAuthUserData, setMyPhoto} from "./auth-reducer";
import {AppThunk, Nullable} from "./redux-store";
import {setIsLoading} from "./app-reducer";
import {toggleIsFetching, UserType} from "./users-reducer";
import {handleServerNetworkError} from "../components/common/Utils/errorHandler";
import {AxiosError} from "axios";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS_PROFILE = 'SET_STATUS_PROFILE';
const REMOVE_POST = 'REMOVE_POST';
const EDIT_POST = 'EDIT_POST';
const UPDATE_PROFILE = 'UPDATE_PROFILE';
const MY_FRIENDS = 'MY_FRIENDS';
const SET_IS_FOLLOWED = 'SET_IS_FOLLOWED';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'

export type ProfilePageType = {
    posts: Array<PostType>
    profile: null | ProfileType
    status: Nullable<string>
    myFriends: Array<UserType>
    isFollowed: Nullable<boolean>
}

export type ProfileType = {
    'userId': number
    'aboutMe': Nullable<string>
    lookingForAJob: Nullable<boolean>
    lookingForAJobDescription: Nullable<boolean>
    fullName: string
    contacts: ContactsType
    photos: {
        small: Nullable<string>
        large: Nullable<string>
    }
}

type ContactsType = {
    github: Nullable<string>
    vk: Nullable<string>
    facebook: Nullable<string>
    instagram: Nullable<string>
    twitter: Nullable<string>
    website: Nullable<string>
    youtube: Nullable<string>
    mainLink: Nullable<string>
}

export type PostType = {
    id: number
    message: string
    likesCount: number
    image: string

}

//Автоматическая типизация AC на основе возвращаемого значения функции AC
export type ActionsProfileTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatusProfile>
    | ReturnType<typeof removePostActionCreator>
    | ReturnType<typeof editPostActionCreator>
    | ReturnType<typeof setUpdateProfile>
    | ReturnType<typeof setIsLoading>
    | ReturnType<typeof setMyFriends>
    | ReturnType<typeof setIsFollowed>
    | ReturnType<typeof setPhotoSuccess>

let initialState = {
    posts: [
        {
            id: 1,
            message: 'Горы, кристально чистое озеро и вокруг тишина, ты наедине с природой, что может быть лучше?😍',
            likesCount: 10,
            image: imagePost1
        },
        {id: 2, message: 'Когда работа любимая, каждый день в радость ❤', likesCount: 56, image: imagePost2},
        {
            id: 3,
            message: 'Наконец то завершился ремонт в нашем уютном домике, как Вам?😉',
            likesCount: 35,
            image: imagePost3
        },
        {
            id: 4,
            message: 'Отправились в путешествие на выходных, а Вы часто путешествуете❓',
            likesCount: 55,
            image: imagePost4
        },
    ],
    profile: null as Nullable<ProfileType>,
    status: null as Nullable<string>,
    myFriends: [] as Array<UserType>,
    isFollowed: null as Nullable<boolean>
}

export const profileReducer = (state = initialState, action: ActionsProfileTypes): ProfilePageType => {
    switch (action.type) {
        case ADD_POST: {

            const post = {id: 5, message: action.newText, likesCount: 205, image: imageDefaultPost}
            return {...state, posts: [post, ...state.posts,]}
        }

        case SET_USER_PROFILE: {
            // @ts-ignore
            return {...state, profile: action.profile}
        }
        case SET_STATUS_PROFILE: {
            return {...state, status: action.status}
        }

        case REMOVE_POST: {
            const postsAfterDeletion = state.posts.filter((p) => p.id !== action.id)
            return {...state, posts: postsAfterDeletion}
        }

        case EDIT_POST: {
            const postEdit = state.posts.map((p) => p.id === action.id ? {...p, message: action.newText} : p)
            return {...state, posts: postEdit}
        }

        case UPDATE_PROFILE: {
            return <ProfilePageType>{...state, profile: action.updateModelProfile}
        }

        case MY_FRIENDS: {

            return {...state, myFriends: action.myFriends}
        }
        case SET_IS_FOLLOWED: {
            return {...state, isFollowed: action.isFollowed}
        }
        case SAVE_PHOTO_SUCCESS: {
            // @ts-ignore
            return {...state, profile: {...state.profile, photos: action.photo}}

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

export const removePostActionCreator = (id: number) => {
    return {
        type: REMOVE_POST, id
    } as const
}

export const editPostActionCreator = (id: number, newText: string) => {
    return {
        type: EDIT_POST, id, newText
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
    } as const
}

const setUpdateProfile = (updateModelProfile: EditParamsType) => {
    return {
        type: UPDATE_PROFILE, updateModelProfile
    } as const
}

const setMyFriends = (myFriends: Array<UserType>) => {
    return {
        type: MY_FRIENDS, myFriends
    } as const
}

export const setIsFollowed = (isFollowed: Nullable<boolean>) => {
    return {
        type: SET_IS_FOLLOWED, isFollowed
    } as const
}

export const setPhotoSuccess = (photo: any) => {
    return {
        type: SAVE_PHOTO_SUCCESS, photo
    } as const
}

export const isFollowed = (id: number | null | undefined): AppThunk => (dispatch) => {
    usersAPI.isFollowed(id)
        .then(data => {
            dispatch(setIsFollowed(data))
        })
}

export const getUserProfile = (userId: number): AppThunk => (dispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(isFollowed(userId))
    usersAPI.getProfile(userId)
        .then(data => {
            dispatch(setUserProfile(data))
        }).finally(() => {
        dispatch(toggleIsFetching(false))
    })
}


export const getStatusProfile = (userId: number): AppThunk => (dispatch) => {
    dispatch(toggleIsFetching(true))
    profileAPI.getStatus(userId)
        .then((res) => {
            dispatch(setStatusProfile(res.data))
            dispatch(toggleIsFetching(false))
        })
}

export const updateStatus = (status: string): AppThunk => (dispatch) => {
    dispatch(toggleIsFetching(true))
    profileAPI.updateStatus(status)
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(setStatusProfile(status))
            } else {
                handleServerNetworkError(dispatch, res.data.messages[0])
            }
        }).catch((err: AxiosError) => {
        handleServerNetworkError(dispatch, err.message)
    }).finally(() => {
        dispatch(toggleIsFetching(false))
    })

}

export const savePhoto = (file: File): AppThunk => (dispatch) => {
    dispatch(toggleIsFetching(true))
    profileAPI.savePhoto(file)
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(setPhotoSuccess(res.data.data.photos))
                dispatch(setMyPhoto(res.data.data.photos.small))
            } else {
                handleServerNetworkError(dispatch, res.data.messages[0])
            }
        }).catch((err: AxiosError) => {
        handleServerNetworkError(dispatch, err.message)
    })
        .finally(() => {
            dispatch(setIsLoading(false))
            dispatch(toggleIsFetching(false))
        })
}

export const updateProfile = (updateModelProfile: EditParamsType): AppThunk => (dispatch) => {
    dispatch(toggleIsFetching(true))
    profileAPI.updateProfile(updateModelProfile)
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(setUpdateProfile(updateModelProfile))
                dispatch(getAuthUserData)
                dispatch(toggleIsFetching(false))
            } else {
                handleServerNetworkError(dispatch, res.data.messages[0])
            }
        }).catch((err: AxiosError) => {
        handleServerNetworkError(dispatch, err.message)
    }).finally(() => {
        dispatch(toggleIsFetching(false))
    })
}

export type EditParamsType = Omit<ProfileType, "id" | "photos">

export const fetchMyFriends = (): AppThunk => (dispatch) => {
    dispatch(toggleIsFetching(true))
    usersAPI.getUsers(1, 100, '', true).then(data => {
        dispatch(setMyFriends(data.items))
        dispatch(toggleIsFetching(false))
    }).catch((err: AxiosError) => {
        handleServerNetworkError(dispatch, err.message)
    })
        .finally(() => {
            dispatch(setIsLoading(false))
            dispatch(toggleIsFetching(false))
        })
}
