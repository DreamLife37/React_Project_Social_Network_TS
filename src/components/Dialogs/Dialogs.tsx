import React from 'react';
import {DialogItem} from "./DialogItem/DialogsItem";
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Field, Form, Formik, FormikHelpers} from "formik";
import * as Yup from "yup";

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

const MessageSchema = Yup.object().shape({
    message: Yup.string()
        .required('Message is required')
        .min(1, 'Message must be at least 6 characters')
        .max(100, 'Message must not exceed 40 characters'),
});

const NewMessageForm: React.FC<PropsType> = (props) => {
    return (
        <div>
            <Formik
                initialValues={{
                    message: '',
                }}
                validationSchema={MessageSchema}
                onSubmit={(
                    values: Values,
                    {setSubmitting}: FormikHelpers<Values>
                ) => {

                    props.onSubmit(values.message)
                }}
            >
                {({errors, touched}) => (
                    <Form>
                        <Field as="textarea" name="message" placeholder={'Input message'}/>
                        {touched.message && errors.message && <div className={s.error}>{errors.message}</div>}
                        <div>
                            <button type="submit">Send</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
