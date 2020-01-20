import React from "react";
import style from "./MobileNavBar.module.css";
import { NavLink } from "react-router-dom";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import ChatIcon from "@material-ui/icons/Chat";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";

const MobileNav = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.item}>
        <NavLink activeClassName={style.active} to="/profile">
          <AccountBoxIcon style={{ fontSize: "40px" }} />
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink activeClassName={style.active} to="/dialogs">
          <ChatIcon style={{ fontSize: "40px" }} />
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink activeClassName={style.active} to="/users">
          <PeopleAltIcon style={{ fontSize: "40px" }} />
        </NavLink>
      </div>
    </div>
  );
};

export default MobileNav;
