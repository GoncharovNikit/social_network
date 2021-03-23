import React from "react";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  debugger;
  let posts_jsx = props.posts_data
    .map((value) => (
      <Post
        message={value.text}
        likes={value.countLikes}
        author={value.author}
      />
    ))
    .reverse();

  //создаем ссылку
  // let newPostInput = React.createRef();
  // ref не нужен - передает по event

  let on_click_add_post = () => {
    props.add_post();
  };
  let on_post_text_change = (event) => {
    props.post_text_change(event.target.value);
  };

  return (
    <div className={c.post_wrap}>
      {/* {[<Post message="How is it going?" likes="5" author="John" />, 'awjf', 1342]} */}
      <h1>My Posts</h1>
      <div className={c.send_wrap}>
        <textarea
          /*defaultValue="hello ept"*/
          // ref={newPostInput}
          value={props.post_current_text}
          className={c.news_input}
          type="text"
          placeholder="Your news..."
          onChange={on_post_text_change}
        />
        <button className={c.send} onClick={on_click_add_post}>
          Send
        </button>
      </div>
      <div className={c.post_div}></div>
      <br />
      {/* <Post message="How is it going?" likes="5" author="John" />
      <Post message="What??!" likes="10" author="Dima" /> */}
      {posts_jsx}
    </div>
  );
};

export default MyPosts;
