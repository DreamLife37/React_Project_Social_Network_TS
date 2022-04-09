import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import axios from "axios";
import {UsersPropsType} from "./UsersContainer";

export class Users extends React.Component<UsersPropsType> {

    constructor(props: UsersPropsType) {
        super(props);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return <div>
            <div>
                {pages.map(page => <span onClick={() => this.onPageChanged(page)}
                                         className={this.props.currentPage === page ? s.selectedPage : ''}>{page}</span>)}
            </div>
            {this.props.users.map(u => <div key={u.id} className={s.userItems}>
                <span className={s.name}>{u.name}</span>
                <div><span>{'u.location.country'}</span>, <span>{'u.location.city'}</span></div>
                <div>{u.status}</div>
                <img
                    src={u.photos.small === null ? userPhoto : u.photos.small}/>
                <div>{u.followed
                    ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                    : <button onClick={() => this.props.follow(u.id)}>Follow</button>}</div>
            </div>)}
        </div>
    }
}
