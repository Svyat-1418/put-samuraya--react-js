const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_MESSAGE_BODY = "UPDATE_MESSAGE_BODY";



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
            newMessageBody: ""
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
        if (action.type === ADD_POST) {
            debugger; //попали ли в if
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.messages.push({id: 4, message: body});
            this._state.dialogsPage.newMessageBody = "";
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        }
    }
}
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const addPostActionCreator = () => ({type: ADD_POST});

export const updateMessageBodyCreator = (message) =>
    ({type: UPDATE_MESSAGE_BODY, body: message});
export const sendMessageCreator = () => ({type: SEND_MESSAGE});

window.store = store;
export default store;
