const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

export type UserType = {
    photos: {small: null | string,large: null | string};
    id: number,
    photoUrl: string,
    followed: boolean,
    name: string,
    status: string,
    location: { city: string, country: string }
}

type UserPageType = {
    users: Array<UserType>
}

//Автоматическая типизация AC на основе возвращаемого значения функции AC
export type ActionsUsersTypes = ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC> | ReturnType<typeof setUsersAC>

let initialState: UserPageType = {
    users: []
}

export const usersReducer = (state: UserPageType = initialState, action: ActionsUsersTypes): UserPageType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            debugger
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}

export const followAC = (userId: number) => {
    return {
        type: FOLLOW,
        userId
    } as const
}


export const unfollowAC = (userId: number) => {
    return {
        type: UNFOLLOW,
        userId
    } as const
}

export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: SET_USERS,
        users
    } as const
}
