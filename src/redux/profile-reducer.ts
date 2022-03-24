import {ActionsTypes, ProfilePageType} from "./state";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

//Автоматическая типизация AC на основе возвращаемого значения функции AC
export type ActionsProfileTypes = ReturnType<typeof addPostActionCreator>
     | ReturnType<typeof updateNewPostActionCreator>


export const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            const post = {id: 5, message: state.newPostText, likesCount: 205}
            state.posts.push(post)
            state.newPostText = ('')
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    } as const
}
export const updateNewPostActionCreator = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: newText
    } as const
}