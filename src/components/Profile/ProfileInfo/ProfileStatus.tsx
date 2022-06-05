import React from "react";

interface IComponentProps {
    status: string
    updateStatus: (status: string) => void
}

interface IComponentState {
    editMode: boolean,
    status: string
}

export class ProfileStatus extends React.Component<IComponentProps, IComponentState> {
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

    componentDidUpdate = (prevProps: IComponentProps, prevState: IComponentState) => {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return <div>Status:
            {!this.state.editMode
                ? <div><span onDoubleClick={this.activatedEditMode}>{this.props.status || '---'}</span></div>
                : <div><input onChange={(e) => this.setState({status: e.currentTarget.value})}
                              autoFocus={true}
                              value={this.state.status}
                              onBlur={this.deactivatedEditMode}/></div>}
        </div>

    }
}
