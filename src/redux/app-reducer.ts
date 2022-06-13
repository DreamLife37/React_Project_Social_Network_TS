import {Dispatch} from "redux";
import {AppThunk} from "./redux-store";
import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'


export type AuthPageType = {
    initialized: boolean
}

//Автоматическая типизация AC на основе возвращаемого значения функции AC
export type ActionsAuthTypes = ReturnType<typeof initializedSuccess>

let initialState: AuthPageType = {
    initialized: false
}

export const appReducer = (state: AuthPageType = initialState, action: ActionsAuthTypes): AuthPageType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
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

export const initializedSuccess = () => {
    return {
        type: INITIALIZED_SUCCESS
    } as const
}

export const initializeApp = () => {
    return (dispatch: any) => {
        let promise = dispatch(getAuthUserData())
        promise.then(() => {
            dispatch(initializedSuccess())
        })
        debugger

    }
}




