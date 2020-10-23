import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateMessageBodyCreator} from "../../redux/state";

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let onNewMessageBodyChange = (e) => {   //e - объект события
        let text = e.target.value;
        let action  = updateMessageBodyCreator(text);
        props.store.dispatch(action);
    }
    let onSendMessageClick = () => {
        let action = sendMessageCreator();
        props.store.dispatch(action);
    }

    let dialogsElements = state.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messagesElements = state.messages.map(m => <Message id={m.id} message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
                <div>
                    <div>
                        <textarea onChange={onNewMessageBodyChange}
                                  value={state.newMessageBody}
                                  placeholder="Enter your message"/>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Dialogs;