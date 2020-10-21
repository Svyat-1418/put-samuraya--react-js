import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    return (
        <div className={s}>
            <div>
                <img
                    src="https://specials-images.forbesimg.com/imageserve/5ec2899e39da220006585816/960x0.jpg?cropX1=0&cropX2=664&cropY1=175&cropY2=486"
                    alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}
export default ProfileInfo;