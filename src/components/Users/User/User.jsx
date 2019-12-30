import React from "react";
import s from "./User.module.css";
import { NavLink } from "react-router-dom";

const User = props => {
  return (
    <div className={s.wrapper}>
      <div className={s.logoBlock}>
        <NavLink to={"/profile/" + props.id}>
          <img className={s.logo} src={props.logo} alt="" />
        </NavLink>
        <div>
          {props.followed ? (
            <div
              className={s.follow}
              onClick={() => {
                props.unFollow(props.id);
              }}
            >
              Unfollow
            </div>
          ) : (
            <div
              className={s.follow}
              onClick={() => {
                props.follow(props.id);
              }}
            >
              Follow
            </div>
          )}
        </div>
      </div>
      <div className={s.infoBlock}>
        <div className={s.info}>
          <div className={s.name}>{props.name}</div>
          <div className={s.description}>{props.description}</div>
        </div>
        <div className={s.location}>
          <div className={s.country}>{props.country}</div>
          <div className={s.city}>{props.city}</div>
        </div>
      </div>
    </div>
  );
};

export default User;
