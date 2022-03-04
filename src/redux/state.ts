let rerenderEntireTree = () => {
    console.log('State changed')
    console.log(state)
}

export let state = {

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
}

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

export let addPost = () => {
    const post = {id: 5, message: state.profilePage.newPostText, likesCount: 205}
    state.profilePage.posts.push(post)
    state.profilePage.newPostText = ('')
    rerenderEntireTree()
}

export let updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree()
}


export const addMessage = () => {
    const message = {id: 4, message: state.dialogsPage.newMessageText}
    state.dialogsPage.messages.push(message)
    state.dialogsPage.newMessageText = ('')
    rerenderEntireTree()
}

export const updateNewMessageText = (newMessage: string) => {
    state.dialogsPage.newMessageText = newMessage
    rerenderEntireTree()
}

type SubscribeProps = {
    observer: () => void
}
export const subscribe = (observer: () => void) => { //observer-наблюдатель
rerenderEntireTree=observer;
}



