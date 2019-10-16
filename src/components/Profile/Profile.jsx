import React from "react";
import s from "./Profile.module.css";
import Posts from "./Posts/Posts";

const Profile = () => {
  return (
    <div className={s.profile}>
      <img
        className={s.banner}
        src="https://images.wallpaperscraft.com/image/line_light_shiny_wavy_neon_36863_1680x1050.jpg"
        alt=""
      ></img>
      <img
        className={s.logo}
        src="https://i.pinimg.com/originals/51/40/69/5140696fcc077099bd92525eed882e7c.jpg"
        alt=""
      ></img>
      <div className={s.info}>description</div>
      <Posts />
    </div>
  );
};

export default Profile;
