import {ActionsTypes, DialogsPageType} from "./state";

const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

//Автоматическая типизация AC на основе возвращаемого значения функции AC
export type ActionsDialogsTypes = ReturnType<typeof addMessageActionCreator>
    | ReturnType<typeof updateNewMessageActionCreator>

export const dialogsReducer = (state: DialogsPageType, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const message = {id: 4, message: state.newMessageText}
            state.messages.push(message)
            state.newMessageText = ('')
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage
            return state
        default:
            return state
    }
}

export const addMessageActionCreator = () => {
    return {
        type: 'ADD-MESSAGE'
    } as const
}
export const updateNewMessageActionCreator = (newMessage: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT', newMessage: newMessage
    } as const
}