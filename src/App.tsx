import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {ReduxStoreType} from "./redux/redux-store";

export type AppPropsType = {
    store: ReduxStoreType
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
                               element={<Dialogs dialogs={state.dialogsReducer.dialogs}
                                                 messages={state.dialogsReducer.messages}
                                                 dispatch={props.store.dispatch.bind(props.store)}
                                                 newMessageText={state.dialogsReducer.newMessageText}
                               />}/>
                        <Route path="profile" element={<Profile posts={state.profileReducer.posts}
                                                                dispatch={props.store.dispatch.bind(props.store)}
                                                                newPostText={state.profileReducer.newPostText}

                        />}/>
                        <Route path="news" element={'News'}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
