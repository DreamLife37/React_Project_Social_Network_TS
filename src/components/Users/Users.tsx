import {UsersPropsType} from "./UsersContainer";
import s from './Users.module.css'

export let Users = (props: UsersPropsType) => {
    debugger
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://cs-site.ru/uploads/posts/2020-09/1600253946_49.jpg',
                followed: false,
                name: 'Andrey',
                status: 'I like Vue',
                location: {city: 'Ivanovo', country: 'Russia'}
            },
            {
                id: 2,
                photoUrl: 'https://cs-site.ru/uploads/posts/2020-09/1600253946_49.jpg',
                followed: false,
                name: 'Alex',
                status: 'I like React',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
            {
                id: 3,
                photoUrl: 'https://cs-site.ru/uploads/posts/2020-09/1600253946_49.jpg',
                followed: true,
                name: 'Sergey',
                status: 'I like React',
                location: {city: 'Minsk', country: 'Belarus'}
            },])
    }

    return <div>
        {props.users.map(u => <div key={u.id} className={s.userItems}>
            <span className={s.name}>{u.name}</span>
            <div><span>{u.location.country}</span>, <span>{u.location.city}</span></div>
            <div>{u.status}</div>
            <img src={u.photoUrl}/>
            <div>{u.followed
                ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                : <button onClick={() => props.follow(u.id)}>Follow</button>}</div>
        </div>)}
    </div>
}