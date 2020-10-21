import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: "Dmitri"},
        {id: 2, name: "Victoria"},
        {id: 3, name: "Valery"},
        {id: 4, name: "Pavel"},
        {id: 5, name: "Vlad"}
    ]

    let messages = [
        {id: 1, message: "Hi!"},
        {id: 2, message: "How is your React-wayOfSamurai?"},
        {id: 3, message: "Good!"}
    ]

    let dialogsElements = dialogs.map((d)=> <DialogItem id={d.id} name={d.name}/>)
    let messagesElements = messages.map((m) => <Message id={m.id} message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>

    )
}
export default Dialogs;