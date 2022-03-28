const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export type ProfilePageType = {
    newPostText: string
    posts: Array<PostType>
}

type PostType = {
    id: number
    message: string
    likesCount: number
}

//Автоматическая типизация AC на основе возвращаемого значения функции AC
export type ActionsProfileTypes = ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostActionCreator>

let initialState = {
    newPostText: '',
    posts: [
        {id: 1, message: 'Hello world', likesCount: 10},
        {id: 2, message: 'I like It-incubator', likesCount: 56},
        {id: 3, message: 'I learn React', likesCount: 35},
        {id: 4, message: 'I learn CSS', likesCount: 55},
    ]
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsProfileTypes): ProfilePageType => {
    switch (action.type) {
        case ADD_POST: {
            const post = {id: 5, message: state.newPostText, likesCount: 205}
            return {...state, posts: [...state.posts, post], newPostText: ('')}
        }
        case UPDATE_NEW_POST_TEXT: {
            return {...state, newPostText: action.newText}
        }
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