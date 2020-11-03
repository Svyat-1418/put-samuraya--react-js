const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: body}],
                newMessageBody: ""
            }
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }
        default:
            return state;


    }
}

export const updateNewMessageBodyCreator = (message) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: message});
export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export default dialogsReducer;
