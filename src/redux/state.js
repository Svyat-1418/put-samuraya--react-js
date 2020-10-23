let rerenderEntireTree = () => {
    console.log("State update");
}

let state = {
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
}

window.state = state;

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = "";
    rerenderEntireTree(state);
}
export let updateNewPostText = (text) => {
    state.profilePage.newPostText = text;
    rerenderEntireTree(state);
}
export let sendNewMessage = () => {
    let newMessage = {
        id: 4,
        message: state.dialogsPage.newMessageText
    }
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = "";
    rerenderEntireTree(state);
}
export let updateNewMessageText = (messageText) => {
    state.dialogsPage.newMessageText = messageText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;