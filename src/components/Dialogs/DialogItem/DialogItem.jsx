import React from "react";
import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <div className={s.dialogInfo}>
                <div className={s.dialogAva}>{props.name.charAt(0)}</div>
                <div className={s.dialogName}><NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink></div>
            </div>
            {/*<UserInfo id={props.id} name={props.name} />*/}
        </div>
    )
}
export default DialogItem;