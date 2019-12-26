import React from "react";
import s from "./UserInfo.module.css";

const UserInfo = () => {
  return (
    <div className={s.user}>
      <img className={s.banner} src="" alt=""></img>
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
