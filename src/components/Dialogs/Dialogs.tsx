import React from "react";
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
}
export const Dialogs = (props: DialogsPropsType) => {


    let dialogsElements = props.dialogs.map(d => {
        return <DialogItem name={d.name} id={d.id}/>
    })
    let messagesElements = props.messages.map(m => {
        return <Message message={m.message}/>
    })

    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogsElements}
        </div>
        <div className={s.messages}>
            {messagesElements}
        </div>
    </div>
}