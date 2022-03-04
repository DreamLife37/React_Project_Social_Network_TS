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

export type StoreType = {
    _state: StatePropsType
    updateNewMessageText: (newMessage: string) => void
    addMessage: () => void
    updateNewPostText: (newText: string) => void
    addPost: () => void
    subscribe: (observer: () => void) => void
    _rerenderEntireTree: () => void
    getState: () => StatePropsType
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
    updateNewMessageText(newMessage: string) {
        this._state.dialogsPage.newMessageText = newMessage
        this._rerenderEntireTree()
    },
    addMessage() {
        const message = {id: 4, message: this._state.dialogsPage.newMessageText}
        this._state.dialogsPage.messages.push(message)
        this._state.dialogsPage.newMessageText = ('')
        this._rerenderEntireTree()
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._rerenderEntireTree()
    },
    addPost() {
        const post = {id: 5, message: this._state.profilePage.newPostText, likesCount: 205}
        this._state.profilePage.posts.push(post)
        this._state.profilePage.newPostText = ('')
        this._rerenderEntireTree()
    },
    _rerenderEntireTree() {
        console.log('State changed')
        console.log(this._state)
    },
    subscribe(observer) { //observer-наблюдатель
        this._rerenderEntireTree = observer;
    },
    getState() {
        return this._state
    }

}

