import React from 'react';
import {addMessageActionCreator, DialogsPageType, updateNewMessageActionCreator} from "../../redux/dialogs-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Dialogs} from './Dialogs';
import {connect} from "react-redux";
import {Dispatch} from "redux";

type MapStateToProps = {
    dialogsPage: DialogsPageType
    isAuth: boolean
}

type MapDispatchToProps = {
    updateNewMessage: (message: string) => void
    addMessage: () => void
}

export type DialogsPropsType = MapStateToProps & MapDispatchToProps

let mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        updateNewMessage: (message: string) => {
            dispatch(updateNewMessageActionCreator(message))
        },
        addMessage: () => {
            dispatch(addMessageActionCreator())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
//Функция connect создает контейнерную компоненту, внутри рендерит презентационную
//и внутрь презентационно компоненты в качестве props передает то, что указано в первых скобках
//в них указано 2 функции которые настраиваеют наш connect, возвращая объекты, одна с данными, другая с callback
