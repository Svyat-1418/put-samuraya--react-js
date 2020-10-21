import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    <NavLink to='dialogs/1'>Dmitri</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2'>Victoria</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'>Valery</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/4'>Pavel</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/5'>Vlad</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi!</div>
                <div className={s.message}>How is yuor </div>
                <div className={s.message}>Good</div>
            </div>
        </div>

    )
}
export default Dialogs;