import React from "react";
import {NavLink} from "react-router-dom";
import s from "./FriendItem.module.css";

const FriendItem = (props) => {

    return (

        <div className={s.friendInfo}>
            <div className={s.friendAva}>{props.name.charAt(0)}</div>
            <div className={s.friendName}><NavLink to={`/friends/${props.id}`}>{props.name}</NavLink></div>
        </div>
    )
}
export default FriendItem;