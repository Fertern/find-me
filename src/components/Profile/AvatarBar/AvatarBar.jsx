import React from "react";
import s from "./AvatarBar.module.css";
import defaultPhoto from "../../../assets/USER-LOGO.png";

const AvatarBar = ({ userPhoto: { small, large } }) => {
  return (
    <div className={s.avatar}>
      <img className={s.logo} src={large || small || defaultPhoto} alt=""></img>
    </div>
  );
};

export default AvatarBar;
