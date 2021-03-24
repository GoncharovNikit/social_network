import React from "react";
import c from "./User.module.css";

const User = (props) => 
{ 
    return (
        <div className={c.user_wrap}>
            <div className={c.user_text_data}>
                <span className={c.user_name}><b>{props.name}</b></span>
                <span className={c.user_status}>{props.status}</span>
                <small><span className={c.user_location}>{props.location.city}, {props.location.country}</span></small>
            </div>
            <div className={c.avatar_follow_wrap}>
                <img className={c.avatar} src="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg" alt=""/>
                <button className={c.follow_btn}>{ props.is_followed?'Unfollow':'Follow' }</button>
            </div>
        </div>
    )
}

export default User;