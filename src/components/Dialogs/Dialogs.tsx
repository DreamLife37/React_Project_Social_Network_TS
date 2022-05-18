import React from 'react';
import {ChangeEvent, KeyboardEvent} from 'react';
import {DialogItem} from "./DialogItem/DialogsItem";
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {withAuthRedirect} from "../hoc/WithAuthRedirect";

export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => {
        return <DialogItem key={d.id} name={d.name} id={d.id}/>
    })
    let messagesElements = props.dialogsPage.messages.map(m => {
        return <Message key={m.id} message={m.message}/>
    })

    const SendMessage = () => {
        props.addMessage()
    }

    const updateNewMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let message = e.currentTarget.value
        props.updateNewMessage(message)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter") {
            props.addMessage()
        }
    }

    return <div className={s.dialogs}>

        <div className={s.dialogsItems}>
            {dialogsElements}
        </div>
        <div className={s.messages}>
            {messagesElements}
        </div>

        <div>
            <textarea value={props.dialogsPage.newMessageText}
                      onChange={updateNewMessage}
                      onKeyPress={onKeyPressHandler}
            >
            </textarea>
            <button onClick={SendMessage}>Send message</button>
        </div>

    </div>
}