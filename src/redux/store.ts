//Создаем константы:
import {ActionsProfileTypes, profileReducer} from "./profile-reducer";
import {ActionsDialogsTypes, dialogsReducer} from "./dialogs-reducer";

type PostType = {
    id: number
    message: string
    likesCount: number
}
type ProfilePageType = {
    newPostText: string
    posts: Array<PostType>
}

type MessageType = {
    id: number
    message: string
}

type DialogType = {
    id: number
    name: string
}
 type DialogsPageType = {
    newMessageText: string
    messages: Array<MessageType>
    dialogs: Array<DialogType>
}

export type StatePropsType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    // observer:SubscribeProps
}

type SubscribeProps = {
    observer: () => void
}


//Автоматическая типизация AC на основе возвращаемого значения функции AC
export type ActionsTypes =
    ActionsProfileTypes | ActionsDialogsTypes

export type StoreType = {
    _state: StatePropsType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    getState: () => StatePropsType
    dispatch: (action: ActionsTypes) => void
}

export const store: StoreType = {
    _state: {
        profilePage: {
            newPostText: '',
            posts: [
                {id: 1, message: 'Hello world', likesCount: 10},
                {id: 2, message: 'I like It-incubator', likesCount: 56},
                {id: 3, message: 'I learn React', likesCount: 35},
                {id: 4, message: 'I learn CSS', likesCount: 55},
            ]
        },
        dialogsPage: {
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
    },

    _callSubscriber() {
        console.log('State changed')
        //console.log(this._state)
    },

    dispatch(action:any) { //action то объект, который описывает какое действие мы должны совершить.
        //у этого объекта есть обязательное свойство ТИП
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber()
    },

    subscribe(observer) { //observer-наблюдатель
        this._callSubscriber = observer;
    },
    getState() {
        return this._state
    }

}

