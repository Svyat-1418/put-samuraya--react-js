import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {store => {
                let onNewMessageBodyChange = (body) => {
                    let action  = updateNewMessageBodyCreator(body);
                    store.dispatch(action);
                }
                let onSendMessageClick = () => {
                    let action = sendMessageCreator();
                    store.dispatch(action);
                }

                return <Dialogs updateNewMessageBody={onNewMessageBodyChange}
                                sendMessage={onSendMessageClick}
                                state={store.getState().dialogsPage} />
            }
            }
        </StoreContext.Consumer>
    )

}
export default DialogsContainer;