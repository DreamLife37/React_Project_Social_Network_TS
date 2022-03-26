import React from 'react';
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-reducer";
import {ReduxStoreType} from "../../redux/redux-store";
import {Dialogs} from './Dialogs';


type DialogsPropsType = {
    store: ReduxStoreType
}

export const DialogsContainer = (props: DialogsPropsType) => {
    let state = props.store.getState().dialogsReducer

    const onClickSendMessageHandler = () => {
        props.store.dispatch(addMessageActionCreator())
    }

    const onChangeMessageHandler = (message: string) => {
        props.store.dispatch(updateNewMessageActionCreator(message))
    }

    return <div>
        <Dialogs dialogPage={state} updateNewMessage={onChangeMessageHandler} addMessage={onClickSendMessageHandler}/>
    </div>
}