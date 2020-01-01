import React from "react";
import s from "./AvatarBar.module.css";

const AvatarBar = props => {
  if (!props.photo.large) {
    props.photo.large =
      "https://www.soluzionidifferenti.it/wp-content/uploads/2017/06/USER-LOGO.png";
  }
  return (
    <div className={s.avatar}>
      <img className={s.logo} src={props.photo.large} alt=""></img>
    </div>
  );
};

export default AvatarBar;
