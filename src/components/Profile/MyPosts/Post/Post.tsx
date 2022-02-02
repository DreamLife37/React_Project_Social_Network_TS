import s from './Post.module.css'

export const Post = () => {
    return <div>
        <div className={s.item}>
            <img src='https://davidzeevaarder.nl/wp-content/uploads/2017/06/cropped-fav.png'></img>
            post 1
        </div>
        <div>Like</div>
    </div>
}