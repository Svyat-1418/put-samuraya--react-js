const add_Post = "add_Post";
const update_New_Post_Text = "update_New_Post_Text";
const add_New_Message = "add_New_Message";
const update_New_Message_Text = "update_New_Message_Text";



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
    _callSubscriber() {
        console.log("State update");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        debugger; //попали ли в dispatch
        if (action.type === add_Post) {
            debugger; //попали ли в if
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state);
        } else if (action.type === update_New_Post_Text) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === add_New_Message) {
            let newMessage = {
                id: 4,
                message: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = "";
            this._callSubscriber(this._state);
        } else if (action.type === update_New_Message_Text) {
            this._state.dialogsPage.newMessageText = action.messageText;
            this._callSubscriber(this._state);
        }
    }
}
export const updateNewPostTextActionCreator = (text) =>
    ({type: "update_New_Post_Text", newText: text});
export const addPostActionCreator = () => ({type: "add_Post"});
export const updateNewMessageTextActionCreator = (message) =>
    ({type: "update_New_Message_Text", messageText: message});
export const addNewMessageActionCreator = () => ({type: "add_New_Message"});

window.store = store;
export default store;
