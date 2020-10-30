import React from "react";import s from "./MyPosts.module.css";
import {addPostActionCreator, updateNewPostBodyActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    let state = props.store.getState().profilePage;

    let onAddPostClick = () => {
        let action = addPostActionCreator();
        props.store.dispatch(action);
    }

    let onPostBodyChange = (body) => {
        let action = updateNewPostBodyActionCreator(body);
        props.store.dispatch(action);
    }

    return <MyPosts addPost={onAddPostClick}
                    updateNewPostBody={onPostBodyChange}
                    state={state} />
}

export default MyPostsContainer;