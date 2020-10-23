import * as serviceWorker from './serviceWorker';
import './index.css';
import state, {addPost, sendNewMessage, subscribe, updateNewMessageText, updateNewPostText} from "./redux/state";
import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}
                     addPost={addPost}
                     updateNewPostText={updateNewPostText}
                     sendNewMessage={sendNewMessage}
                     updateNewMessageText={updateNewMessageText}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree(state);

subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
