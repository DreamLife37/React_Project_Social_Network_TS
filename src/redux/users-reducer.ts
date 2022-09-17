import {usersAPI} from "../api/api";
import {Dispatch} from "redux";
import {setIsLoading} from "./app-reducer";
import {isFollowed, setIsFollowed} from "./profile-reducer";
import {AppThunk, Nullable} from "./redux-store";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USER_COUNT = 'SET-TOTAL-USER-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS'
const SET_SEARCH_USERS = 'SET_SEARCH_USERS'

export type UserType = {
    photos:
        {
            small: Nullable<string>
            large: Nullable<string>
        };
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
    followingInProgress: Array<number>
    searchUsers: Array<UserType>
}

//Автоматическая типизация AC на основе возвращаемого значения функции AC
export type ActionsUsersTypes = ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess> | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingProgress>
    | ReturnType<typeof setSearchUsers>
    | ReturnType<typeof setIsLoading>
    | ReturnType<typeof setIsFollowed>


let
    initialState: UserPageType = {
        users: [],
        pageSize: 40,
        totalUserCount: 0,
        currentPage: 1,
        isFetching: true,
        followingInProgress: [],
        searchUsers: []
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

        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return <UserPageType>{
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter((id: number) => id != action.userId)
            }
        case SET_SEARCH_USERS:
            return {...state, searchUsers: action.searchUsers}
        default:
            return state
    }
}

export const followSuccess = (userId: number | null | undefined) => {
    return {
        type: FOLLOW,
        userId
    } as const
}


export const unfollowSuccess = (userId: number | null | undefined) => {
    return {
        type: UNFOLLOW,
        userId
    } as const
}

export const setUsers = (users: Array<UserType>) => {
    return {
        type: SET_USERS,
        users
    } as const
}

export const setSearchUsers = (searchUsers: Array<UserType>) => {
    return {
        type: SET_SEARCH_USERS,
        searchUsers
    } as const
}

export const setCurrentPage = (page: number) => {
    return {
        type: SET_CURRENT_PAGE,
        page
    } as const
}

export const setTotalUsersCount = (totalCount: number) => {
    return {
        type: SET_TOTAL_USER_COUNT,
        totalCount
    } as const
}

export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    } as const
}

export const toggleFollowingProgress = (isFetching: boolean, userId: number | null | undefined) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching, userId
    } as const
}

export const getUsers = (currentPage: number, pageSize: number) => { //ThunkCreator
    return (dispatch: Dispatch<ActionsUsersTypes>) => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
            })
            .finally(() => {
                dispatch(setIsLoading(false))
                dispatch(toggleIsFetching(false))
            })
    }
}


export const getSearchUsers = (currentPage: number, pageSize: number, term: string) => { //ThunkCreator
    return (dispatch: Dispatch<ActionsUsersTypes>) => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize, term)
            .then(data => {
                dispatch(toggleIsFetching(false))
                dispatch(setSearchUsers(data.items))
            })
            .finally(() => {
                dispatch(setIsLoading(false))
                dispatch(toggleIsFetching(false))
            })
    }
}

export const follow = (id: number | null | undefined): AppThunk => { //ThunkCreator
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, id))
        usersAPI.follow(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followSuccess(id))
                    dispatch(isFollowed(id))
                }
                dispatch(toggleFollowingProgress(false, id))
            })

    }
}

export const unFollow = (id: number | null | undefined): AppThunk => { //ThunkCreator
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, id))
        usersAPI.unFollow(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollowSuccess(id))
                    dispatch(isFollowed(id))
                }
                dispatch(toggleFollowingProgress(false, id))
            })
            .finally(() => {
                dispatch(setIsLoading(false))
            })
    }
}

