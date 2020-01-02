import React from "react";
import s from "./MobileMenu.module.css";
import { NavLink } from "react-router-dom";

const MobileMenu = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink activeClassName={s.active} to="/profile">
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink activeClassName={s.active} to="/dialogs">
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink activeClassName={s.active} to="/news">
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink activeClassName={s.active} to="/users">
          Users
        </NavLink>
      </div>
      {/* <Friends friendList={props.friendList} /> */}
    </nav>
  );
};

export default MobileMenu;
