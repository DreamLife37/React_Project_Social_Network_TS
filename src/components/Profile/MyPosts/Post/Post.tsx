import s from './Post.module.css'
import React, {ChangeEvent, useState} from "react";
import {
    editLikeActionCreator,
    editPostActionCreator,
    PostType,
    removePostActionCreator
} from "../../../../redux/profile-reducer";
import {useDispatch} from "react-redux";
import {SvgSelector} from '../../../common/Utils/svgSelector';
import {useAppSelector} from "../../../../redux/redux-store";
import userAvatarDefault from "../../../../assets/images/user.png";

type PostsType = {
    post: PostType
}

export const Post = (props: PostsType) => {
    const [actionMenu, openActionMenu] = useState(false)
    const [editMode, setEditMode] = useState(false)
    const [newMessage, setNewMessageText] = useState(props.post.message)
    const dispatch = useDispatch()

    const nameAuthor = useAppSelector(state => state.profilePage.profile?.fullName)
    const largePhoto = useAppSelector(state => state.profilePage.profile?.photos.large)

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
        <div className={s.wrapperAvatar}>
            <img className={s.userAvatar} src={largePhoto || userAvatarDefault}/>
        </div>
        <div className={s.content}>
            <div className={s.header}>
                <div className={s.name}>{nameAuthor}</div>
                <div className={s.data}>2 сентября 2022</div>
                <div className={s.action} onClick={() => openActionMenu(!actionMenu)}><SvgSelector
                    id={'actionPost'}/>
                    <div className={`${s.actionMenu} ${actionMenu ? '' : s.actionMenuNone}`}>
                        <div className={s.itemActionMenu} onClick={() => setEditMode(true)}>
                            <SvgSelector id={'edit'}/><span>Редактировать</span>
                        </div>
                        <div className={s.itemActionMenu} onClick={removePost}><SvgSelector
                            id={'delete'}/><span>Удалить</span></div>
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
            <div className={s.like} onClick={() => (dispatch(editLikeActionCreator(props.post.id)))}>
                <SvgSelector id={'like'} />
                <span>{props.post.likesCount}</span>
            </div>
        </div>

    </div>

}