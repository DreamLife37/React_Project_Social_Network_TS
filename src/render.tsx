import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addMessage, addPost, StatePropsType, updateNewMessageText, updateNewPostText} from "./redux/state";

export let rerenderEntireTree = (state: StatePropsType) => {

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


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
