import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let updateNewMessageBody = (e) => {   //e - объект события
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }
    let sendMessage = () => {
        props.sendMessage();
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
                        <textarea onChange={updateNewMessageBody}
                                  value={props.dialogsPage.newMessageBody}
                                  placeholder="Enter your message"/>
                    </div>
                    <div>
                        <button onClick={sendMessage}>Send</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Dialogs;