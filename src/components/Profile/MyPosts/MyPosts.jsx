import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postData = [
        {id: 1, message: "It's my first project", likesCount: 30},
        {id: 2, message: "I learning React", likesCount: 50}
    ]

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
                <Post id={postData[0].id} message={postData[0].message} likesCount={postData[0].likesCount}/>
                <Post id={postData[1].id} message={postData[1].message} likesCount={postData[1].likesCount}/>
            </div>
        </div>
    )
}

export default MyPosts;