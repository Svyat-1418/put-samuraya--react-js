import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id: 1, message: "It's my first project", likesCount: 30},
    {id: 2, message: "I learning React", likesCount: 50},
    {id: 3, message: "I finished 25 lessons", likesCount: 5},
    {id: 4, message: "I finished 27 lessons", likesCount: 15}
]

let dialogs = [
    {id: 1, name: "Dmitri"},
    {id: 2, name: "Victoria"},
    {id: 3, name: "Valery"},
    {id: 4, name: "Pavel"},
    {id: 5, name: "Vlad"}
]

let messages = [
    {id: 1, message: "Hi!"},
    {id: 2, message: "How is your React-wayOfSamurai?"},
    {id: 3, message: "Good!"}
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
