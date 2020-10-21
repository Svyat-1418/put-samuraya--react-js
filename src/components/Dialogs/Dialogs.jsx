import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>

    )
}

const Message = (props) => {
    return (
        <div>
            {props.message}
        </div>
    )
}

const Dialogs = (props) => {

    let dialogData = [
        {id: 1, name: "Dmitri"},
        {id: 2, name: "Victoria"},
        {id: 3, name: "Valery"},
        {id: 4, name: "Pavel"},
        {id: 5, name: "Vlad"}
    ]

    let messageData = [
        {id: 1, message: "Hi!"},
        {id: 2, message: "How is your React-wayOfSamurai?"},
        {id: 3, message: "Good!"}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem id={dialogData[0].id} name={dialogData[0].name}/>
                <DialogItem id={dialogData[1].id} name={dialogData[1].name}/>
                <DialogItem id={dialogData[2].id} name={dialogData[2].name}/>
                <DialogItem id={dialogData[3].id} name={dialogData[3].name}/>
                <DialogItem id={dialogData[4].id} name={dialogData[4].name}/>
            </div>

            <div className={s.messages}>
                <Message id={messageData[0].id} message={messageData[0].message}/>
                <Message id={messageData[1].id} message={messageData[1].message}/>
                <Message id={messageData[2].id} message={messageData[2].message}/>
            </div>
        </div>

    )
}
export default Dialogs;