import React from "react";
import {addPostActionCreator, updateNewPostBodyActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {store => {
                let onAddPostClick = () => {
                    let action = addPostActionCreator();
                    store.dispatch(action);
                }
                let onPostBodyChange = (body) => {
                    let action = updateNewPostBodyActionCreator(body);
                    store.dispatch(action);
                }
                return <MyPosts addPost={onAddPostClick}
                                updateNewPostBody={onPostBodyChange}
                                state={store.getState().profilePage} />
            }}
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;