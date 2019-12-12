import React from "react";
import s from "./Nav.module.css";
import Friends from "../Friends/Friends";
import { NavLink } from "react-router-dom";

const Nav = props => {
  //debugger;
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
        <NavLink activeClassName={s.active} to="/settings">
          Settings
        </NavLink>
      </div>
      <Friends friendList={props.state.friends} />
    </nav>
  );
};

export default Nav;
