import React from "react";
import s from "./Friend.module.css";

export default function Friend(props) {
  return (
    <div>
      <div className={s.friend}>
        <img className={s.logo} src={props.logo} alt=""></img>
        <div className={s.name}>{props.name}</div>
      </div>
    </div>
  );
}
