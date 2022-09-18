import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateStatus} from "../../../redux/profile-reducer";
import {AppStateType, useAppSelector} from "../../../redux/redux-store";
import s from "./ProfileStatus.module.css"

interface IComponentProps {
    status: string
    updateStatus: (status: string) => void
}

interface IComponentState {
    editMode: boolean,
    status: string
}


//React.Component<IComponentProps, IComponentState>
export const ProfileStatusWithHooks = (props: any) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)
    const userId = useAppSelector(state => state.profilePage.profile?.userId)
    const myId = useAppSelector(state => state.auth.id)
    const fullName = useSelector((state: AppStateType) => state.profilePage.profile?.fullName)


    const dispatch = useDispatch()

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activatedEditMode = () => {
        if (userId === myId) {
            setEditMode(true)
        }
    }

    const deactivatedEditMode = () => {
        setEditMode(false)
        dispatch(updateStatus(status))
    }

    return <div>

        <>
            <blockquote className={s.blockquote2} onDoubleClick={activatedEditMode}>
                {<p>{!editMode ? props.status : <input onChange={(e) => setStatus(e.currentTarget.value)}
                                                       autoFocus={true}
                                                       value={status}
                                                       className={s.inputStatus}
                                                       onBlur={deactivatedEditMode}/>}</p>}
                <cite>{fullName}</cite>
            </blockquote>
        </>

    </div>

}

