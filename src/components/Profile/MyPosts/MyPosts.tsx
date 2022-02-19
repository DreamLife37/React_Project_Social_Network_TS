import s from './MyPosts.module.css'
import {Post} from "./Post/Post";


export const MyPosts = () => {
    let postData = [
        {id: 1, message: 'Hello world', likesCount: 10},
        {id: 2, message: 'I like It-incubator', likesCount: 56},
        {id: 3, message: 'I learn React', likesCount: 35},
        {id: 4, message: 'I learn CSS', likesCount: 55},
    ]

    let postsElement= postData.map(p => {
        return <Post message={p.message} likeCount={p.likesCount}/>
    })

    return <div>
        <h3>My posts</h3>
        <div><textarea></textarea></div>
        <button>Add post</button>
        <div className={s.posts}>
            {postsElement}
        </div>

    </div>
}