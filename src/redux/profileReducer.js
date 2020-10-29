const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

let initialState = {
    posts: [
        {id: 1, message: "It's my first project", likesCount: 30},
        {id: 2, message: "I learning React", likesCount: 50},
        {id: 3, message: "I finished 25 lessons", likesCount: 5},
        {id: 4, message: "I finished 27 lessons", likesCount: 15}
    ],
    newPostText: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost);
            state.newPostText = "";
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const addPostActionCreator = () => ({type: ADD_POST});

export default profileReducer;