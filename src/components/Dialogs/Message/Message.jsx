import React from "react";
import style from "./Message.module.css";

const Message = ({ text }) => {
  return (
    <div className={style.wrapper}>
      <span className={style.message}>
        <span>{text}</span>
      </span>
    </div>
  );
};

export default Message;
