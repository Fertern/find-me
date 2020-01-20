import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { Button } from "@material-ui/core";

const Header = ({ id, logout, isAuth }) => {
  return (
    <header className={s.header}>
      {isAuth && (
        <Button variant="contained" style={{ marginRight: "5px" }}>
          <NavLink
            style={{
              color: "#18425F",
              textDecoration: "none"
            }}
            to={"/profile/" + id}
          >
            My profile
          </NavLink>
        </Button>
      )}

      {isAuth && (
        <Button
          style={{
            color: "#18425F"
          }}
          variant="contained"
          className={s.logout}
          onClick={logout}
        >
          Logout
        </Button>
      )}
    </header>
  );
};

export default Header;
