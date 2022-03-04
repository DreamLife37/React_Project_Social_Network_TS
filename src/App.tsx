import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {StoreType} from "./redux/state";

export type AppPropsType = {
    store: StoreType
}

const App: React.FC<AppPropsType> = (props) => {
    const state = props.store.getState();
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="dialogs/*"
                               element={<Dialogs dialogs={state.dialogsPage.dialogs}
                                                 messages={state.dialogsPage.messages}
                                                 updateNewMessageText={props.store.updateNewMessageText.bind(props.store)}
                                                 addMessage={props.store.addMessage.bind(props.store)}
                                                 newMessageText={state.dialogsPage.newMessageText}
                               />}/>
                        <Route path="profile" element={<Profile posts={state.profilePage.posts}
                                                                addPost={props.store.addPost.bind(props.store)}
                                                                newPostText={state.profilePage.newPostText}
                                                                updateNewPostText={props.store.updateNewPostText.bind(props.store)}

                        />}/>
                        <Route path="news" element={'News'}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
