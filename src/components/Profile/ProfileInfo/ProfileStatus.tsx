import React from "react";


type ProfileStatusPropsType = {
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state = {
        editMode: false
    }

    toggleEditMode = () => {
        this.setState({
            editMode: !this.state.editMode
        })
    }

    render() {
        return <div>Status
            {!this.state.editMode
                ? <div><span onDoubleClick={this.toggleEditMode}>{this.props.status}</span></div>
                : <div><input autoFocus={true} onBlur={this.toggleEditMode} value={this.props.status}/></div>}
        </div>

    }
}
