import React from "react";
import s from "./Message.module.css";

const Message = props => {
  return (
    <div className={s.wrapper}>
      <span className={s.message}>
        <span className={s.text}>{props.text}</span>
      </span>
    </div>
  );
};

export default Message;
