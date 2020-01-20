import style from "./Dialog.module.css";
import React from "react";
import { NavLink } from "react-router-dom";

const Dialog = ({ name, counter, id }) => {
  let path = "/dialogs/" + id;
  return (
    <div className={style.item}>
      <NavLink activeClassName={style.active} to={path}>
        {name}
      </NavLink>
      <div className={style.counter}>{counter}</div>
    </div>
  );
};

export default Dialog;
