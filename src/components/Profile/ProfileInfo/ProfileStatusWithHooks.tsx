import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {updateStatus} from "../../../redux/profile-reducer";
import {useAppSelector} from "../../../redux/redux-store";

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

    return <div>Status:
        {!editMode
            ? <> <span onDoubleClick={activatedEditMode}>{props.status || '---'}</span></>
            : <> <input onChange={(e) => setStatus(e.currentTarget.value)}
                        autoFocus={true}
                        value={status}
                        onBlur={deactivatedEditMode}/></>}
    </div>

}

