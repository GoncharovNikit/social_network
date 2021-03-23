import React from "react";
import c from "./Friend.module.css";

const Friend = (props) => 
{
    return (
        <div className={c.friend_wrap}>
            <div className={c.name}>
                {props.name}
            </div>
            <img
                className={c.avatarka}
                src="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg"
                alt=""
            />
        </div>
    );
};

export default Friend;