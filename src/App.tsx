import React, {Component, FC, useEffect} from 'react';
import './App.css';
import {Navbar} from "./components/LeftSide/Navbar/Navbar";
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {useDispatch} from "react-redux";

import {useAppSelector} from "./redux/redux-store";
import {LeftSide} from "./components/LeftSide/LeftSide";
import {Preloader} from "./components/common/Preloader/Preloader";
import {ProfileSettings} from "./components/ProfileSettings/ProfileSettings";
import {setUserProfile} from "./redux/profile-reducer";

import {RightSide} from "./components/RightSide/RightSide";
import {ProfileInfo} from "./components/Profile/ProfileInfo/ProfileInfo";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import {initializeApp} from "./redux/app-reducer";


export const App: FC = () => {
    const dispatch = useDispatch()
    const initialized = useAppSelector((state) => state.app.initialized)
    const isLoading = useAppSelector(state => state.app.isLoading)
    const isAuth = useAppSelector(state => state.auth.isAuth)

    useEffect(() => {
        dispatch(initializeApp())
    }, [dispatch])

    // if (!initialized) {
    //     return <Preloader/>
    // }


    if (isLoading) {
        return <Preloader/>
    }

    // {isFetching
    //    ? <Preloader/>
    //     : null}
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer/>
                <div className={'container'}>
                    {isAuth && <div className={'leftSide'}><LeftSide/></div>}
                    <div className='content'>
                        <Routes>
                            <Route path="dialogs/*" element={<DialogsContainer/>}/>
                            <Route path="profile/:userId" element={<ProfileContainer/>}/>
                            <Route path="profile/:userId" element={<ProfileInfo/>}/>
                            <Route path='/profile' element={<ProfileContainer/>}/>
                            <Route path='/' element={<ProfileContainer/>}/>
                            <Route path='/React_Project_Social_Network_TS' element={<ProfileContainer/>}/>
                            <Route path="users" element={<UsersContainer/>}/>
                            <Route path='login' element={<Login/>}/>
                            <Route path='profileSettings' element={<ProfileSettings/>}/>
                        </Routes>
                    </div>
                    {isAuth && <div className={'rightSide'}><RightSide/></div>}
                </div>
            </div>
        </BrowserRouter>
    );

}

