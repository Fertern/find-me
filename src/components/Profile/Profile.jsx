import React from "react";
import s from "./Profile.module.css";
import Posts from "./Posts/Posts";
import UserInfo from "./UserInfo/UserInfo";

const Profile = props => {
  return (
    <div className={s.profile}>
      <UserInfo />
      <Posts posts={props.state.posts} />
    </div>
  );
};

export default Profile;
