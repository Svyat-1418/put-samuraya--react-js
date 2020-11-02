import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostBodyActionCreator} from "../../../redux/profileReducer";

const MyPosts = (props) => {

    let postsElements = props.profilePage.posts.map((p) => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>);

    let addPost = () => {
       props.addPost()
    }

    let updateNewPostBody = (e) => {
        let body = e.target.value;
        props.updateNewPostBody(body);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={updateNewPostBody}
                              placeholder={"What new?"}
                              value={props.profilePage.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
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