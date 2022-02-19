import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

type postDataType = {
    id: number,
    message: string
    likesCount: number
}
type MyPostsPropsType = {
    postData: Array<postDataType>
}

export const MyPosts = (props: MyPostsPropsType) => {

    let postsElement = props.postData.map(p => {
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