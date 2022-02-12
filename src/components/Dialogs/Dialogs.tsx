import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


type DialogItemPropsType = {
    id: string
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
    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            <DialogItem name={'Andrey'} id={'1'}/>
            <DialogItem name={'Ekaterina'} id={'2'}/>
            <DialogItem name={'Dimych'} id={'3'}/>
            <DialogItem name={'Alex'} id={'4'}/>
        </div>
        <div className={s.messages}>
            <Message message={'Hi'}/>
            <Message message={'How is your it-incubator?'}/>
            <Message message={'Yo'}/>
            <Message message={'Yo'}/>
            <Message message={'Yo'}/>
        </div>
    </div>
}