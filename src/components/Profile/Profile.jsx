import React from "react";
import s from "./Profile.module.css";
import UserInfo from "./UserInfo/UserInfo";
import PostsContainer from "./Posts/PostsContainer";
import Preloader from "../common/Preloader/Preloader";

const Profile = props => {
  if (props.profile) {
    return (
      <div className={s.profile}>
        <UserInfo profile={props.profile} />
        <PostsContainer />
      </div>
    );
  }
  return <Preloader />;
};

export default Profile;
