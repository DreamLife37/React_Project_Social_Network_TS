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

type AddPostActionType = {
    type: 'ADD-POST',
}
type UpdateNewPostActionType = {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: string
}

type AddMessageActionType = {
    type: 'ADD-MESSAGE',
}
type UpdateNewMessageActionType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    newMessage: string
}

export type ActionsTypes =
    AddPostActionType
    | UpdateNewPostActionType
    | AddMessageActionType
    | UpdateNewMessageActionType

export type StoreType = {
    _state: StatePropsType
    _rerenderEntireTree: () => void
    // updateNewMessageText: (newMessage: string) => void
    // addMessage: () => void
    // updateNewPostText: (newText: string) => void
    // addPost: () => void
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
    _rerenderEntireTree() {
        console.log('State changed')
        console.log(this._state)
    },
    // updateNewMessageText(newMessage: string) {
    //     this._state.dialogsPage.newMessageText = newMessage
    //     this._rerenderEntireTree()
    // },
    // addMessage() {
    //     const message = {id: 4, message: this._state.dialogsPage.newMessageText}
    //     this._state.dialogsPage.messages.push(message)
    //     this._state.dialogsPage.newMessageText = ('')
    //     this._rerenderEntireTree()
    // },
    // updateNewPostText(newText: string) {
    //     this._state.profilePage.newPostText = newText
    //     this._rerenderEntireTree()
    // },
    // addPost() {
    //     const post = {id: 5, message: this._state.profilePage.newPostText, likesCount: 205}
    //     this._state.profilePage.posts.push(post)
    //     this._state.profilePage.newPostText = ('')
    //     this._rerenderEntireTree()
    // },
    dispatch(action) { //action то объект, который описывает какое действие мы должны совершить.
        //у этого объекта есть обязательное свойство ТИП
        if (action.type === 'ADD-POST') {
            const post = {id: 5, message: this._state.profilePage.newPostText, likesCount: 205}
            this._state.profilePage.posts.push(post)
            this._state.profilePage.newPostText = ('')
            this._rerenderEntireTree()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._rerenderEntireTree()
        } else if (action.type === 'ADD-MESSAGE') {
            const message = {id: 4, message: this._state.dialogsPage.newMessageText}
            this._state.dialogsPage.messages.push(message)
            this._state.dialogsPage.newMessageText = ('')
            this._rerenderEntireTree()
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newMessage
            this._rerenderEntireTree()
        }
    },

    subscribe(observer) { //observer-наблюдатель
        this._rerenderEntireTree = observer;
    },
    getState() {
        return this._state
    }

}

