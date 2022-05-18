import React from 'react';
import {addMessageActionCreator, DialogsPageType, updateNewMessageActionCreator} from "../../redux/dialogs-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Dialogs} from './Dialogs';
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {withAuthRedirect} from "../hoc/WithAuthRedirect";

type MapStateToProps = {
    dialogsPage: DialogsPageType
}

type MapDispatchToProps = {
    updateNewMessage: (message: string) => void
    addMessage: () => void
}

export type DialogsPropsType = MapStateToProps & MapDispatchToProps

let mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        dialogsPage: state.dialogsPage,
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

let WithAuthRedirectComponent = withAuthRedirect(Dialogs)

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(WithAuthRedirectComponent)
//Функция connect создает контейнерную компоненту, внутри рендерит презентационную
//и внутрь презентационно компоненты в качестве props передает то, что указано в первых скобках
//в них указано 2 функции которые настраиваеют наш connect, возвращая объекты, одна с данными, другая с callback
