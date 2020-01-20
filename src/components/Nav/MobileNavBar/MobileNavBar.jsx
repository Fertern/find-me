import React from "react";
import s from "./MobileNavBar.module.css";
import { NavLink } from "react-router-dom";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import ChatIcon from "@material-ui/icons/Chat";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";

const MobileNav = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.item}>
        <NavLink activeClassName={s.active} to="/profile">
          <AccountBoxIcon style={{ fontSize: "40px" }} />
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink activeClassName={s.active} to="/dialogs">
          <ChatIcon style={{ fontSize: "40px" }} />
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink activeClassName={s.active} to="/users">
          <PeopleAltIcon style={{ fontSize: "40px" }} />
        </NavLink>
      </div>
    </div>
  );
};

export default MobileNav;
