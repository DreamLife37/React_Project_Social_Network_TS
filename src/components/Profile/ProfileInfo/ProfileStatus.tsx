import React from "react";


type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activatedEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivatedEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status as string)
    }

    render() {
        return <div>Status:
            {!this.state.editMode
                ? <div><span onDoubleClick={this.activatedEditMode}>{this.props.status || '---'}</span></div>
                : <div><input onChange={(e) => this.setState({status: e.currentTarget.value})} autoFocus={true}
                              value={this.state.status}
                              onBlur={this.deactivatedEditMode}/></div>}
        </div>

    }
}
