import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let newMessageElement = React.createRef();
    let onTextMessageChange = () => {
        let text = newMessageElement.current.value;
        let action  = {type: "updateNewMessageText", messageText: text};
        props.dispatch(action);
    }
    let sendNewMessage = () => {
        props.dispatch({type: "sendNewMessage"});
    }

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <Message id={m.id} message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
                <div>
                    <div>
                        <textarea onChange={onTextMessageChange}
                                  ref={newMessageElement}
                                  value={props.newMessageText}/>
                    </div>
                    <div>
                        <button onClick={sendNewMessage}>Send</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Dialogs;