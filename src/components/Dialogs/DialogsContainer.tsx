import React from 'react';
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-reducer";
import {ReduxStoreType} from "../../redux/redux-store";
import StoreContext from '../../StoreContext';
import {Dialogs} from './Dialogs';


type DialogsPropsType = {
    store: ReduxStoreType
}

export const DialogsContainer = () => {

    return <div><StoreContext.Consumer>
        {

        (store) => {
            let state = store.getState().dialogsReducer

            const onClickSendMessageHandler = () => {
                store.dispatch(addMessageActionCreator())
            }

            const onChangeMessageHandler = (message: string) => {
                store.dispatch(updateNewMessageActionCreator(message))
            }
            return <Dialogs dialogPage={state}
                            updateNewMessage={onChangeMessageHandler}
                            addMessage={onClickSendMessageHandler}/>
        }}
    </StoreContext.Consumer>

    </div>
}