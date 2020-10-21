import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea>What new</textarea>
                <button>Send post</button>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                <Post message="It's my first project" like="15"/>
                <Post message="I learning React" like="25"/>
            </div>
        </div>
    )
}

export default MyPosts;