import React from "react";
import {
  addPostActionCreator,
  postTextChangeActionCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

// const MyPostsContainer = (props) => {
//   let state = props.store.getState().profile;

//   let add_post = () => {
//     props.store.dispatch(addPostActionCreator());
//   };
//   let post_text_change = (text) => {
//     props.store.dispatch(postTextChangeActionCreator(text));
//   };

//   return <MyPosts 
//     post_text_change={post_text_change} 
//     add_post={add_post} 
//     post_current_text={state.post_current_text}
//     posts_data={state.postsData}
//   />;
// };

let mapStateToProps = (state) => 
{
  return {
    posts_data: state.profile.postsData,
    post_current_text: state.profile.post_current_text,
  }
};
let mapDispatchToProps = (dispatch) =>
{ 
  return {
    post_text_change: (text) => dispatch(postTextChangeActionCreator(text)),
    add_post: () => dispatch(addPostActionCreator()),
  }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
