const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USER_COUNT = 'SET-TOTAL-USER-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'


export type UserType = {
    photos: { small: null | string, large: null | string };
    id: number,
    photoUrl: string,
    followed: boolean,
    name: string,
    status: string,
    location: { city: string, country: string }
}

type UserPageType = {
    users: Array<UserType>
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
}

//Автоматическая типизация AC на основе возвращаемого значения функции AC
export type ActionsUsersTypes = ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC> | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>
    | ReturnType<typeof toggleIsFetchingAC>

let initialState: UserPageType = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: true
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
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.page}
        case SET_TOTAL_USER_COUNT:
            return {...state, totalUserCount: action.totalCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
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

export const setCurrentPageAC = (page: number) => {
    return {
        type: SET_CURRENT_PAGE,
        page
    } as const
}

export const setTotalUsersCountAC = (totalCount: number) => {
    return {
        type: SET_TOTAL_USER_COUNT,
        totalCount
    } as const
}

export const toggleIsFetchingAC = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    } as const
}


