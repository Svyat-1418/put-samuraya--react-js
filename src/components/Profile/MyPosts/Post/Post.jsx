import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://cdnimg.rg.ru/img/content/140/51/49/kinopoisk.ru-Wiedzmin-977505_d_850.jpg" alt="icon"/>
            {props.message}
            <div>
                <span>Like {props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post;