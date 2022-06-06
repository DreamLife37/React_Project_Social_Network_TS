import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {Field, Form, Formik, FormikHelpers} from "formik";

export const MyPosts = (props: MyPostsPropsType) => {
    let postsElement = props.profilePage.posts.map(p => {
        return <Post key={p.id} message={p.message} likeCount={p.likesCount}/>
    })

    const addPost = (newText: string) => {
        props.addPost(newText);
    }

    return <div>
        <h3>My posts</h3>
        <MyPostForm onSubmit={addPost}/>
        <div className={s.posts}>
            {postsElement}
        </div>

    </div>
}


interface Values {
    message: string
}

type PropsType = {
    onSubmit: (values: string) => void
}

const MyPostForm: React.FC<PropsType> = (props) => {
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
