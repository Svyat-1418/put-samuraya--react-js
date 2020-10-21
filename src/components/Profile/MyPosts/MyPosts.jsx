import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let posts = [
        {id: 1, message: "It's my first project", likesCount: 30},
        {id: 2, message: "I learning React", likesCount: 50},
        {id: 3, message: "I finished 25 lessons", likesCount: 5}
    ]

    let postsElements = posts.map((p) => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea>What new</textarea>
                </div>
                <div>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;