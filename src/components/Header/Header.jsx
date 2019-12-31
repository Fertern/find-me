import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = props => {
  return (
    <header className={s.header}>
      <img className={s.logo} src="" alt=""></img>
      <div className={s.login}>
        {props.isAuth ? (
          <NavLink to={"/profile"}>Profile</NavLink>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
