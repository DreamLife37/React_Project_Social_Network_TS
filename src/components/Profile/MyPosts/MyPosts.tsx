import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {Field, Form, Formik, FormikHelpers} from "formik";
import * as Yup from "yup";

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


const PostSchema = Yup.object().shape({
    message: Yup.string()
        .required('Message is required')
        .min(1, 'Message must be at least 6 characters')
        .max(100, 'Message must not exceed 40 characters'),
});

const MyPostForm: React.FC<PropsType> = (props) => {
    return (
        <div>
            <Formik
                initialValues={{
                    message: '',
                }}
                validationSchema={PostSchema}
                onSubmit={(
                    values: Values,
                    {setSubmitting}: FormikHelpers<Values>
                ) => {

                    props.onSubmit(values.message)
                }}
            >
                {({errors, touched}) => (
                    <Form>
                        <Field as="textarea" name="message" placeholder={'Input message for post'}/>
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
