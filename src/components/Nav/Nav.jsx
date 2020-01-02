import React from "react";
import s from "./Nav.module.css";
//import Friends from "../Friends/Friends";
import { NavLink } from "react-router-dom";
import MobileNavBar from "./MobileNavBar/MobileNavBar";

const Nav = props => {
  //debugger;
  return (
    <div className={s.wrapper}>
      <nav className={s.nav} id="menu">
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
      <MobileNavBar />
    </div>
  );
};

export default Nav;
