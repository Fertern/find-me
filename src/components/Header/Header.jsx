import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

const Header = props => {
  const { id, logout, isAuth, errors, errorsCount } = props;
  if (errors.length > 0) {
    let errorMessage = errors[errorsCount - 1][0];
    const isConnectionError = errorMessage === "Network Error";
    if (isConnectionError) {
      errorMessage = (
        <div className="connection-error">
          You are offline. <br /> Please try later or check your connection.
        </div>
      );
    }

    toast(
      <div
        className={
          isConnectionError ? "connection-error-wrapper" : "error-wrapper"
        }
      >
        <span className="warning-emoji">
          <i className="fa fa-exclamation-triangle"></i>
        </span>
        <span className="error-right">
          <div className="error-label">Error:</div>
          <div>{errorMessage}</div>
        </span>
      </div>
    );
  }
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
