const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

export type DialogsPageType = {
    newMessageText: string
    messages: Array<MessageType>
    dialogs: Array<DialogType>
}

type MessageType = {
    id: number
    message: string
}

type DialogType = {
    id: number
    name: string
}

//Автоматическая типизация AC на основе возвращаемого значения функции AC
export type ActionsDialogsTypes = ReturnType<typeof addMessageActionCreator>
    | ReturnType<typeof updateNewMessageActionCreator>

let initialState: DialogsPageType = {
    newMessageText: '',
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-incubator?'},
        {id: 3, message: 'Yo'},
    ],
    dialogs: [
        {id: 1, name: 'Andrey'},
        {id: 2, name: 'Ekaterina'},
        {id: 3, name: 'Dimych'},
        {id: 4, name: 'Alex'},
        {id: 5, name: 'Sergei'},
        {id: 6, name: 'Eva1'},
    ]
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsDialogsTypes): DialogsPageType => {
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