import React from "react";
import c from "./MessageItem.module.css";

const Message = (props) => {
  // debugger;
  return (
    <div className={`${c.message_wrap} ${props.left==1?c.left:''}`}>
      <img
        className={c.avatarka}
        src="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg"
        alt=""
      />
      <div className={`${c.message}`}>{props.message}</div>
    </div>
  );
};

export default Message;
