import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


type DialogItemPropsType = {
    id: number
    name: string
}

const DialogItem = (props: DialogItemPropsType) => {
    debugger
    return (<div className={s.dialog + ' ' + s.active}>
        <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </div>)
}

type MessagePropsType = {
    message: string
}
const Message = (props: MessagePropsType) => {
    return (<div className={s.message}>{props.message}</div>)
}

type DialogsPropsType = {}
export const Dialogs = () => {

    let dialogData = [
        {id: 1, name: 'Andrey'},
        {id: 2, name: 'Ekaterina'},
        {id: 3, name: 'Dimych'},
        {id: 4, name: 'Alex'},
        {id: 5, name: 'Sergei'},
    ]

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-incubator?'},
        {id: 3, message: 'Yo'},
    ]

    let dialogsElements = dialogData.map(d => {
        return <DialogItem name={d.name} id={d.id}/>
    })
    let messagesElements = messagesData.map(m => {
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