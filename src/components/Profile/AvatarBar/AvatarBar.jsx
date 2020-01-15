import React from "react";
import s from "./AvatarBar.module.css";
import defaultPhoto from "../../../assets/USER-LOGO.png";

const AvatarBar = ({
  userPhoto: { small, large },
  isOwnProfile,
  setUpPhoto
}) => {
  const onSelectPhoto = e => {
    if (e.target.files.length) {
      setUpPhoto(e.target.files[0]);
    }
  };
  return (
    <div className={s.avatar}>
      <img className={s.logo} src={large || small || defaultPhoto} alt=""></img>
      {isOwnProfile && <input type="file" onChange={onSelectPhoto} />}
    </div>
  );
};

export default AvatarBar;
