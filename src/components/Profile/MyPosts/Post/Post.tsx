import s from './Post.module.css'

type PostType = {
    message: string
    likeCount: number
}

export const Post = (props: PostType) => {
    return <div>
        <div className={s.item}>
            <img src='https://davidzeevaarder.nl/wp-content/uploads/2017/06/cropped-fav.png'></img>
            {props.message}
        </div>
        <div>Like {props.likeCount}</div>
    </div>

}