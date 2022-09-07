import s from './Post.module.css'
import imgPost1 from '../../../../assets/images/post1.jpg'
import {PostSvgSelector} from "../../PostSvgSelector";
import React, {ChangeEvent, useState} from "react";
import {editPostActionCreator, removePostActionCreator} from "../../../../redux/profile-reducer";
import {useDispatch} from "react-redux";

type PostType = {
    id: number
    message: string
    likeCount: number
}

export const Post = (props: PostType) => {
    const [actionMenu, openActionMenu] = useState(false)
    const [editMode, setEditMode] = useState(false)
    const [newMessage, setNewMessageText] = useState(props.message)
    const dispatch = useDispatch()

    const removePost = () => {
        dispatch(removePostActionCreator(props.id))
    }

    const editPost = () => {
        dispatch(editPostActionCreator(props.id, newMessage))
        setEditMode(false)
    }

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setNewMessageText(e.currentTarget.value)
    }

    return <div className={s.postContainer}>
        <div className={s.avatar}>
            <img src='https://davidzeevaarder.nl/wp-content/uploads/2017/06/cropped-fav.png'></img>
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
                    <textarea className={s.textarea} value={props.message} onChange={handleChange}/>
                    <button onClick={editPost}>Сохранить</button>
                </div> :
                <div className={s.text}>{props.message}</div>}
            <div className={s.picture}>
                <img src={imgPost1}/>
            </div>
            <div className={s.like}>
                <PostSvgSelector id={'like'}/>
                <span>{props.likeCount}</span>
            </div>
        </div>

    </div>

}