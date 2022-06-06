import React from 'react';
import {DialogItem} from "./DialogItem/DialogsItem";
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Field, Form, Formik, FormikHelpers} from "formik";

export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => {
        return <DialogItem key={d.id} name={d.name} id={d.id}/>
    })
    let messagesElements = props.dialogsPage.messages.map(m => {
        return <Message key={m.id} message={m.message}/>
    })

    const SendMessage = (newMessage: string) => {
        props.addMessage(newMessage)
    }

    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogsElements}
        </div>
        <div className={s.messages}>
            {messagesElements}
        </div>
        <div className={s.messages}>
            <NewMessageForm onSubmit={(values) => SendMessage(values)}/>
        </div>

    </div>
}


interface Values {
    message: string
}

type PropsType = {
    onSubmit: (values: string) => void
}


const NewMessageForm: React.FC<PropsType> = (props) => {
    return (
        <div>
            <Formik
                initialValues={{
                    message: '',
                }}

                onSubmit={(
                    values: Values,
                    {setSubmitting}: FormikHelpers<Values>
                ) => {

                    props.onSubmit(values.message)
                }}
            >
                <Form>
                    <Field name="message" type="text" placeholder={'message'}/>
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    );
};
