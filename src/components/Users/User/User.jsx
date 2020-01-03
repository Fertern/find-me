import React from "react";
import s from "./User.module.css";
import { NavLink } from "react-router-dom";

const User = props => {
  const {
    id,
    followUser,
    unFollowUser,
    followed,
    logo,
    followInProgressList,
    name,
    description,
    country,
    city
  } = props;
  return (
    <div className={s.wrapper}>
      <div className={s.logoBlock}>
        <NavLink to={"/profile/" + id}>
          <img className={s.logo} src={logo} alt="" />
        </NavLink>
        <div>
          {followed ? (
            <button
              disabled={followInProgressList.some(listId => listId === id)}
              className={s.follow}
              onClick={() => {
                unFollowUser(id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={followInProgressList.some(listId => listId === id)}
              className={s.follow}
              onClick={() => {
                followUser(id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </div>
      <div className={s.infoBlock}>
        <div className={s.info}>
          <div className={s.name}>{name}</div>
          <div className={s.description}>{description}</div>
        </div>
        <div className={s.location}>
          <div className={s.country}>{country}</div>
          <div className={s.city}>{city}</div>
        </div>
      </div>
    </div>
  );
};

export default User;
