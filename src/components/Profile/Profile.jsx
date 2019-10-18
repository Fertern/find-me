import React from "react";
import s from "./Profile.module.css";
import Posts from "./Posts/Posts";
import UserInfo from "./UserInfo/UserInfo";

const Profile = () => {
  return (
    <div className={s.profile}>
      <UserInfo />
      <Posts />
    </div>
  );
};

export default Profile;
