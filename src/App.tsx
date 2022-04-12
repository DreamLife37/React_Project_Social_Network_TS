import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {ReduxStoreType} from "./redux/redux-store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainerToStore} from './components/Users/UsersContainer';
import {ProfileContainer, ProfileContainerToStore} from "./components/Profile/ProfileContainer";

export type AppPropsType = {
    store: ReduxStoreType
}

const App: React.FC<AppPropsType> = (props) => {
    //const state = props.store.getState();

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="dialogs/*"
                               element={<DialogsContainer/>}/>
                        <Route path="profile/:userId" element={<ProfileContainerToStore/>}/>
                        <Route path='/profile' element={<ProfileContainerToStore/>}/>
                        <Route path="news" element={'News'}/>
                        <Route path="users" element={<UsersContainerToStore/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
