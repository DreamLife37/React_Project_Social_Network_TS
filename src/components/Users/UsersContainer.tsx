import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow, getUsers,
    setCurrentPage,
    toggleFollowingProgress,
    unFollow,
    UserType
} from "../../redux/users-reducer";
import React from "react";
import {Users} from "./Users";
import {compose} from "redux";
import {
    getPageSize,
    getCurrentPage,
    getTotalUsersCount,
    getIsFetching,
    getFollowingInProgress, getPageUsers
} from "../../redux/user-selector";
import {Preloader} from "../common/Preloader/Preloader";


type MapStateToProps = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

type MapDispatchToProps = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setCurrentPage: (page: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

export type UsersPropsType = MapStateToProps & MapDispatchToProps

export class UsersContainer extends React.Component<UsersPropsType> {

    constructor(props: UsersPropsType) {
        super(props);
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   followingInProgress={this.props.followingInProgress}
                   unFollow={this.props.unFollow}
                   follow={this.props.follow}
                   onPageChanged={this.onPageChanged}
            />
        </>
    }
}

let mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        users: getPageUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose<React.FC>(
    connect(mapStateToProps,
        {
            follow,
            unFollow,
            setCurrentPage,
            toggleFollowingProgress,
            getUsers,
        })
)(UsersContainer)


