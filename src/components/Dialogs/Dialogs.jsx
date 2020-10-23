import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let newMessageElement = React.createRef();
    let sendMessage = () => {
        let massage = newMessageElement.current.value;
        alert(massage);
    }

    let dialogsElements = props.state.dialogs.map( d => <DialogItem id={d.id} name={d.name}/>)
    let messagesElements = props.state.messages.map( m => <Message id={m.id} message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea placeholder="Write a message" ref={newMessageElement}></textarea>
                </div>
                <div>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>

    )
}
export default Dialogs;