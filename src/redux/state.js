let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "It's my first project", likesCount: 30},
                {id: 2, message: "I learning React", likesCount: 50},
                {id: 3, message: "I finished 25 lessons", likesCount: 5},
                {id: 4, message: "I finished 27 lessons", likesCount: 15}
            ],
            newPostText: "IT"
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Dmitri"},
                {id: 2, name: "Victoria"},
                {id: 3, name: "Valery"},
                {id: 4, name: "Pavel"},
                {id: 5, name: "Vlad"}
            ],
            messages: [
                {id: 1, message: "Hi!"},
                {id: 2, message: "How is your React-wayOfSamurai?"},
                {id: 3, message: "Good!"}
            ],
            newMessageText: "Yo"
        },
        sidebar: {
            friends: [
                {id: 2, name: "Victoria"},
                {id: 3, name: "Valery"},
                {id: 4, name: "Pavel"}
            ]
        }
    },
    getState () {
        return this._state;
    },
    _callSubscriber () {
        console.log("State update");
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },
    addPost () {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this._state);
    },
    updateNewPostText (text) {
        this._state.profilePage.newPostText = text;
        this._callSubscriber(this._state);
    },
    sendNewMessage () {
        let newMessage = {
            id: 4,
            message: this._state.dialogsPage.newMessageText
        }
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = "";
        this._callSubscriber(this._state);
    },
    updateNewMessageText (messageText) {
        this._state.dialogsPage.newMessageText = messageText;
        this._callSubscriber(this._state);
    }
}
Window.store = store;
export default store;
