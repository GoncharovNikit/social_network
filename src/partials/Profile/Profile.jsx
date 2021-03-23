import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import UserProfile from "./UserProfile/UserProfile";
import c from "./Profile.module.css";

const Profile = (props) => {
  return (
    <div className={c.profile_wrap}>
      <UserProfile />
      <MyPostsContainer
        // postsData={props.state.postsData}
        // newPostText={props.state.newPostText}
        // dispatch={props.dispatch}
        store={props.store}
      />
    </div>
  );
};

export default Profile;
