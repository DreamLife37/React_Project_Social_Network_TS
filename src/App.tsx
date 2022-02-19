import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

type DialogsType = {
    id: number,
    name: string
}
type MessagesType = {
    id: number,
    message: string
}

type PostsType = {
    id: number,
    message: string
    likesCount: number
}

type AppPropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    posts: Array<PostsType>
}


function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="dialogs/*"
                               element={<Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                        <Route path="profile" element={<Profile posts={props.posts}/>}/>
                        <Route path="news" element={'News'}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
