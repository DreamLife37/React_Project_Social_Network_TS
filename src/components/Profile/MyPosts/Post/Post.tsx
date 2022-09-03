import s from './Post.module.css'
import imgPost1 from '../../../../assets/images/post1.jpg'
import {PostSvgSelector} from "../../PostSvgSelector";

type PostType = {
    message: string
    likeCount: number
}

export const Post = (props: PostType) => {
    return <div className={s.postContainer}>
        <div className={s.avatar}>
            <img src='https://davidzeevaarder.nl/wp-content/uploads/2017/06/cropped-fav.png'></img>
        </div>
        <div className={s.content}>
            <div className={s.header}>
                <div className={s.name}>Andrey Schavelev</div>
                <div className={s.data}>2 сентября 2022</div>
                <div className={s.action}>Action</div>
            </div>
            <div className={s.text}>{props.message}</div>
            <div className={s.picture}>
                <img src={imgPost1}/>
            </div>
            <div className={s.like}>
                <PostSvgSelector id={'like'}/>
                <span>{props.likeCount}</span>
            </div>
        </div>

    </div>

}