import React, {useEffect, useState} from "react";

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

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activatedEditMode = () => {
        setEditMode(true)
    }

    const deactivatedEditMode = () => {
        setEditMode(false)
        props.updateStatus(status as string)
    }

    return <div>Status:
        {!editMode
            ? <div><span onDoubleClick={activatedEditMode}>{props.status || '---'}</span></div>
            : <div><input onChange={(e) => setStatus(e.currentTarget.value)}
                          autoFocus={true}
                          value={status}
                          onBlur={deactivatedEditMode}/></div>}
    </div>

}

