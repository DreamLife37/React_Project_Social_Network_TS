import React, {Component, FC, useEffect} from 'react';
import './App.css';
import {Navbar} from "./components/LeftSide/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer"
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {compose} from "redux";
import {connect, useDispatch, useSelector} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {AppStateType, useAppSelector} from "./redux/redux-store";
import {LeftSide} from "./components/LeftSide/LeftSide";
import {Preloader} from "./components/common/Preloader/Preloader";
import {ProfileSettings} from "./components/ProfileSettings/ProfileSettings";
import {setUserProfile} from "./redux/profile-reducer";
import {getAuthUserData} from "./redux/auth-reducer";

type MapDispatchToPropsType = {
    initializeApp: () => void
}

type MapStateToPropsType = {
    //initialized: boolean
}


export const App: FC = () => {
    const dispatch = useDispatch()
    const initialized = useAppSelector<boolean>((state) => state.app.initialized)

    useEffect(() => {
        dispatch(getAuthUserData())
        dispatch(initializeApp())
        //dispatch(setUserProfile(14702))
    },[dispatch])

        if (!initialized) {
            return <Preloader/>
        }


        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <div className={'container'}>
                        <div className={'leftSide'}><LeftSide/></div>
                        <div className='content'>
                            <Routes>
                                <Route path="dialogs/*" element={<DialogsContainer/>}/>
                                <Route path="profile/:userId" element={<ProfileContainer/>}/>
                                <Route path='/profile' element={<ProfileContainer/>}/>
                                <Route path="news" element={'News'}/>
                                <Route path="users" element={<UsersContainer/>}/>
                                <Route path='login' element={<Login/>}/>
                                <Route path='profileSettings' element={<ProfileSettings/>}/>
                            </Routes>
                        </div>
                        <div className={'rightSide'}>My friends</div>
                    </div>
                </div>
            </BrowserRouter>
        );

}

