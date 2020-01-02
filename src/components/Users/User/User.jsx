import React from "react";
import s from "./User.module.css";
import { NavLink } from "react-router-dom";
import { usersAPI } from "../../../api/api";

const User = props => {
  return (
    <div className={s.wrapper}>
      <div className={s.logoBlock}>
        <NavLink to={"/profile/" + props.id}>
          <img className={s.logo} src={props.logo} alt="" />
        </NavLink>
        <div>
          {props.followed ? (
            <button
              disabled={props.followInProgressList.some(id => id === props.id)}
              className={s.follow}
              onClick={async () => {
                props.toggleFollowStatus(true, props.id);
                let data = await usersAPI.unFollowUser(props.id);
                if (data.resultCode === 0) {
                  props.unFollow(props.id);
                  props.toggleFollowStatus(false, props.id);
                }
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={props.followInProgressList.some(id => id === props.id)}
              className={s.follow}
              onClick={async () => {
                props.toggleFollowStatus(true, props.id);
                let data = await usersAPI.followUser(props.id);
                if (data.resultCode === 0) {
                  props.toggleFollowStatus(false, props.id);
                  props.follow(props.id);
                }
              }}
            >
              {" "}
              Follow
            </button>
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
