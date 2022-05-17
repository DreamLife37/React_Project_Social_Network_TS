import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

const SET_USER_DATA = 'SET-USER-DATA'
const SET_USER_PHOTO = 'SET-USER-PHOTO'

export type AuthPageType = {
    id: null | number
    email: null | string
    login: null | string
    isAuth: boolean
    isFetching: boolean
    photo: string
}

//Автоматическая типизация AC на основе возвращаемого значения функции AC
export type ActionsAuthTypes = ReturnType<typeof setUserData> | ReturnType<typeof setUserPhoto>

 let initialState: AuthPageType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: true,
    photo: ''
}

export const authReducer = (state: AuthPageType = initialState, action: ActionsAuthTypes): AuthPageType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }

        case SET_USER_PHOTO:
            return {
                ...state,
                photo: action.photo
            }

        default:
            return state
    }
}

type UserDataType = {
    id: null | number
    email: null | string
    login: null | string
}

export const setUserData = (id: null | number,
                            email: null | string,
                            login: null | string) => {
    return {
        type: SET_USER_DATA,
        data: {id, email, login}
    } as const
}

export const setUserPhoto = (photo: string) => {
    return {
        type: SET_USER_PHOTO,
        photo: photo
    } as const
}

export const getAuthUserData = () => {
    return (dispatch: Dispatch<ActionsAuthTypes>) => {
        usersAPI.getAuthMe()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data
                    dispatch(setUserData(id, email, login))
                    usersAPI.getProfile(id)
                        .then(data => {
                            dispatch(setUserPhoto(data.photos.large))
                        })
                }
            })
    }
}

