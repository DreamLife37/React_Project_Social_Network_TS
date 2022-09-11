import {Dispatch} from "redux";
import {AppThunk} from "./redux-store";
import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'


export type AuthPageType = {
    initialized: boolean,
    isLoading: boolean
}

//Автоматическая типизация AC на основе возвращаемого значения функции AC
export type ActionsAuthTypes = ReturnType<typeof initializedSuccess> | ReturnType<typeof setIsLoading>

let initialState: AuthPageType = {
    initialized: false,
    isLoading: false
}

export const appReducer = (state: AuthPageType = initialState, action: ActionsAuthTypes): AuthPageType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        case "APP/IS-LOADING-SET": {
            return {...state, isLoading: action.payload}
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

export const setIsLoading = (status: boolean) => ({type: "APP/IS-LOADING-SET", payload: status}) as const

export const initializeApp = (): AppThunk => (dispatch) => {
    Promise.all([dispatch(getAuthUserData())])
        .then(() => {
            dispatch(initializedSuccess())
        })
}






