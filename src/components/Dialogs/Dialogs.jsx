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
        <div>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Dmitri" id="1"/>
                <DialogItem name="Victoria" id="2"/>
                <DialogItem name="Valery" id="3"/>
                <DialogItem name="Pavel" id="4"/>
                <DialogItem name="Vlad" id="5"/>
                 </div>

            <div className={s.messages}>
                <Message message="Hi!"/>
                <Message message="How is yuor way of samurai"/>
                <Message message="Good"/>
            </div>
        </div>

    )
}
export default Dialogs;