import React from "react";
import s from "./MobileNavBar.module.css";
import { NavLink } from "react-router-dom";

const MobileNav = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.item}>
        <NavLink activeClassName={s.active} to="/profile">
          <i className="fa fa-user"></i>
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink activeClassName={s.active} to="/dialogs">
          <i className="fa fa-envelope"></i>
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink activeClassName={s.active} to="/users">
          <i className="fa fa-users"></i>
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink activeClassName={s.active} to="/menu">
          <i className="fa fa-bars"></i>
        </NavLink>
      </div>
    </div>
  );
};

export default MobileNav;
