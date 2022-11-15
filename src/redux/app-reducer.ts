import {AppThunk, Nullable} from "./redux-store";
import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'


export type AuthPageType = {
    initialized: boolean,
    isLoading: boolean
    error: Nullable<string>
}

//Автоматическая типизация AC на основе возвращаемого значения функции AC
export type ActionsAppTypes = ReturnType<typeof initializedSuccess>
    | ReturnType<typeof setIsLoading>
    | ReturnType<typeof setError>

let initialState: AuthPageType = {
    initialized: false,
    isLoading: false,
    error: null as Nullable<string>,
}

export const appReducer = (state: AuthPageType = initialState, action: ActionsAppTypes): AuthPageType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        case "APP/IS-LOADING-SET": {
            return {...state, isLoading: action.payload}
        }
        case "APP/ERROR-SET": {
            return {...state, error: action.payload}
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
export const setError = (error: Nullable<string>) => ({type: "APP/ERROR-SET", payload: error}) as const

export const initializeApp = (): AppThunk => (dispatch) => {
    Promise.all([dispatch(getAuthUserData())])
        .then(() => {
            dispatch(initializedSuccess())
        })
}






