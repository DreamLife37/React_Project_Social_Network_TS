import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state,addMessage, addPost, StatePropsType, updateNewMessageText, updateNewPostText} from "./redux/state";

export let rerenderEntireTree = () => {

    ReactDOM.render(
        <React.StrictMode>
            <App dialogs={state.dialogsPage.dialogs}
                 messages={state.dialogsPage.messages}
                 posts={state.profilePage.posts}
                 newPostText={state.profilePage.newPostText}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}
                 addMessage={addMessage}
                 updateNewMessageText={updateNewMessageText}
                 newMessageText={state.dialogsPage.newMessageText}
            />

        </React.StrictMode>,
        document.getElementById('root')
    );
}
