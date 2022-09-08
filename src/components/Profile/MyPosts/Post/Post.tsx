import s from './Post.module.css'

import {PostSvgSelector} from "../../PostSvgSelector";
import React, {ChangeEvent, useState} from "react";
import {editPostActionCreator, removePostActionCreator} from "../../../../redux/profile-reducer";
import {useDispatch} from "react-redux";
import defaultAvatar from '../../../../assets/images/user.png'

type PostType = {
    post: any
}

export const Post = (props: PostType) => {
    const [actionMenu, openActionMenu] = useState(false)
    const [editMode, setEditMode] = useState(false)
    const [newMessage, setNewMessageText] = useState(props.post.message)
    const dispatch = useDispatch()

    const removePost = () => {
        dispatch(removePostActionCreator(props.post.id))
    }

    const editPost = () => {
        dispatch(editPostActionCreator(props.post.id, newMessage))
        setEditMode(false)
    }

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setNewMessageText(e.currentTarget.value)
    }

    return <div className={s.postContainer}>
        <div className={s.avatar}>
            <img src={defaultAvatar}></img>
        </div>
        <div className={s.content}>
            <div className={s.header}>
                <div className={s.name}>Andrey Schavelev</div>
                <div className={s.data}>2 сентября 2022</div>
                <div className={s.action} onClick={() => openActionMenu(!actionMenu)}><PostSvgSelector
                    id={'actionPost'}/>
                    <div className={`${s.actionMenu} ${actionMenu ? '' : s.actionMenuNone}`}>
                        <div className={s.itemActionMenu} onClick={() => setEditMode(true)}>
                            <PostSvgSelector id={'edit'}/><span>Edit</span>
                        </div>
                        <div className={s.itemActionMenu} onClick={removePost}><PostSvgSelector
                            id={'delete'}/><span>Delete</span></div>
                    </div>
                </div>
            </div>
            {editMode ? <div>
                    <textarea className={s.textarea} value={newMessage} onChange={handleChange}/>
                    <button onClick={editPost} className={s.button}>Сохранить</button>
                </div> :
                <div className={s.text}>{props.post.message}</div>}
            <div className={s.picture}>
                <img src={props.post.image}/>
            </div>
            <div className={s.like}>
                <PostSvgSelector id={'like'}/>
                <span>{props.post.likesCount}</span>
            </div>
        </div>

    </div>

}