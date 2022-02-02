import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return <div>
        <div>
            <img src='https://union-travel.ru/assets/images/country/thailand/resorts/beach1.jpg'></img>
        </div>
        <div>avatar+description</div>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
    </div>
}