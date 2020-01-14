import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = props => {
  const { id, logout, isAuth } = props;
  return (
    <header className={s.header}>
      {isAuth ? (
        <NavLink to={"/profile/" + id}>My profile</NavLink>
      ) : (
        <NavLink to={"/login"}>Login</NavLink>
      )}
      {isAuth && (
        <button className={s.logout} onClick={logout}>
          Logout
        </button>
      )}
    </header>
  );
};

export default Header;
