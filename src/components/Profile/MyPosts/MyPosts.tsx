import s from './MyPosts.module.css'
import {Post} from "./Post/Post";


export const MyPosts = () => {
    return <div>
        <h3>My posts</h3>
        <div><textarea></textarea></div>
        <button>Add post</button>
        <div className={s.posts}><Post message={'Hello world'} likeCount={10}/>
            <Post message={'I like It-incubator'} likeCount={54}/>
            <Post message={'I learn React'} likeCount={35}/></div>

    </div>
}