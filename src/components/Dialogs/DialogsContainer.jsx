import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let onNewMessageBodyChange = (body) => {
        let action  = updateNewMessageBodyCreator(body);
        props.store.dispatch(action);
    }
    let onSendMessageClick = () => {
        let action = sendMessageCreator();
        props.store.dispatch(action);
    }

    return <Dialogs updateNewMessageBody={onNewMessageBodyChange}
                    sendMessage={onSendMessageClick}
                    state={state} />

}
export default DialogsContainer;