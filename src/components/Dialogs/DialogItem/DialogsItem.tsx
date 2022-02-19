import React from "react";
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";


type DialogItemPropsType = {
    id: number
    name: string
}

export const DialogItem = (props: DialogItemPropsType) => {
    debugger
    return (<div className={s.dialog + ' ' + s.active}>
        <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </div>)
}

