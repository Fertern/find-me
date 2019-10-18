import s from "./Dialog.module.css";
import React from "react";
import { NavLink } from "react-router-dom";

const Dialog = props => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.item}>
      <NavLink activeClassName={s.active} to={path}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default Dialog;
