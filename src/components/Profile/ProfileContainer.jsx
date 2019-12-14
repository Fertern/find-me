import React from "react";
import s from "./Profile.module.css";
import UserInfo from "./UserInfo/UserInfo";
import PostsContainer from "./Posts/PostsContainer";

const ProfileContainer = props => {
  return (
    <div className={s.profile}>
      <UserInfo />
      <PostsContainer store={props.store} />
    </div>
  );
};

export default ProfileContainer;
