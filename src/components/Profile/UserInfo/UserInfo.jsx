import React from "react";
import s from "./UserInfo.module.css";

const UserInfo = () => {
  return (
    <div className={s.user}>
      <img
        className={s.banner}
        src="https://images.wallpaperscraft.com/mage/line_light_shiny_wavy_neon_36863_1680x1050.jpg"
        alt=""
      ></img>
      <div className={s.info}>
        <img
          className={s.logo}
          src="https://i.pinimg.com/originals/51/40/69/5140696fcc077099bd92525eed882e7c.jpg"
          alt=""
        ></img>
        <div className={s.info}>description</div>
      </div>
    </div>
  );
};

export default UserInfo;
