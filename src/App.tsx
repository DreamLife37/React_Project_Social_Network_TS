import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {ReduxStoreType} from "./redux/redux-store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

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
                               element={<DialogsContainer />}/>
                        <Route path="profile" element={<Profile />}/>
                        <Route path="news" element={'News'}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
