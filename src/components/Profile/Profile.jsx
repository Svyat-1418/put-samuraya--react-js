import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

const Profile = (props) => {

    let posts = [
        {id: 1, message: "It's my first project", likesCount: 30},
        {id: 2, message: "I learning React", likesCount: 50},
        {id: 3, message: "I finished 25 lessons", likesCount: 5}
    ]

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>
    )
}
export default Profile;