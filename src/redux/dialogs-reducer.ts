const ADD_MESSAGE = 'ADD-MESSAGE'

export type DialogsPageType = {
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

let initialState: DialogsPageType = {
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
    //внутренние объекты messages ({id: 1, message: 'Hi'}) не копируем, тк мы их не изменяем
    switch (action.type) {
        case ADD_MESSAGE: {
            debugger
            const message = {id: 4, message: action.newMessage}
            return {...state, messages: [...state.messages, message]}
        }
        default:
            return state
    }
}

export const addMessageActionCreator = (newMessage: string) => {
    return {
        type: 'ADD-MESSAGE', newMessage
    } as const
}