import React from 'react';
import {ChangeEvent} from 'react';
import {DialogItem} from "./DialogItem/DialogsItem";
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";


type DialogsType = {
    id: number,
    name: string
}
type MessagesType = {
    id: number,
    message: string
}
type DialogsPropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageText: string
    updateNewMessageText: (newMessage: string) => void
    addMessage: () => void
}

export const Dialogs = (props: DialogsPropsType) => {
    let dialogsElements = props.dialogs.map(d => {
        return <DialogItem name={d.name} id={d.id}/>
    })
    let messagesElements = props.messages.map(m => {
        return <Message message={m.message}/>
    })

    //  let newMessageElement = React.createRef<HTMLTextAreaElement>()

    const onClickSendMessageHandler = () => {
        props.addMessage()
    }

    const onChangeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {

        props.updateNewMessageText(e.currentTarget.value)
    }


    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogsElements}
        </div>
        <div className={s.messages}>
            {messagesElements}
        </div>

        <div><textarea value={props.newMessageText} onChange={onChangeMessageHandler}></textarea>
            <button onClick={onClickSendMessageHandler}>Send message</button>
        </div>

    </div>
}