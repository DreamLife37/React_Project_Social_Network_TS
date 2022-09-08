import React, {Component} from 'react';
import './App.css';
import {Navbar} from "./components/LeftSide/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer"
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {AppStateType} from "./redux/redux-store";
import {LeftSide} from "./components/LeftSide/LeftSide";
import {Preloader} from "./components/common/Preloader/Preloader";
import {ProfileSettings} from "./components/ProfileSettings/ProfileSettings";

type MapDispatchToPropsType = {
    initializeApp: () => void
}

type MapStateToPropsType = {
    initialized: boolean
}


class App extends Component<MapDispatchToPropsType & MapStateToPropsType> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <div className={'container'}>
                        <div className={'leftSide'}><LeftSide /></div>
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
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        initialized: state.app.initialized
    }

}

export default compose<React.FC>(
    connect(mapStateToProps, {initializeApp})
)(App)
