const SET_USER_DATA = 'SET-USER-DATA'

type AuthPageType = {
    id: null | number
    email: null | string
    login: null | string
    isAuth: boolean
    isFetching: boolean
}

//Автоматическая типизация AC на основе возвращаемого значения функции AC
export type ActionsUsersTypes = ReturnType<typeof setUserData>


let initialState: AuthPageType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: true
}

export const authReducer = (state: AuthPageType = initialState, action: ActionsUsersTypes): AuthPageType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
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


