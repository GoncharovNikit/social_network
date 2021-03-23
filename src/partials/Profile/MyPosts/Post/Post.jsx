import React from "react";
import c from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={c.post_item}>
      <br/>
      <img className={c.avatarka} 
        src="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg" 
        alt=""/> <br/>
      <b className={c.author}>{props.author}</b><br/>
      <b>Text</b>: {props.message} <br/>
      <b>Likes</b>: {props.likes}
      <hr/>
    </div>
  );
};

export default Post;
