import React from "react";
import User from "./User/User";
import s from "./Users.module.css";

const Users = props => {
  let pageCount = Math.ceil(props.usersCount / props.page);
  //const realPageCount = pageCount;
  if (pageCount > 20) {
    pageCount = 20;
  }
  let pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }
  const allUsers = props.userList.map(u => (
    <User
      id={u.id}
      key={u.id}
      logo={
        u.photos.small != null
          ? u.photos.small
          : "https://i.pinimg.com/originals/51/40/69/5140696fcc077099bd92525eed882e7c.jpg"
      }
      followed={u.followed}
      name={u.name}
      description={u.description}
      country="u.location.country"
      city="u.location.city"
      follow={props.follow}
      unFollow={props.unFollow}
    />
  ));
  return (
    <div className={s.wrapper}>
      <div className={s.label}>Users</div>
      <div className={s.allUsers}>{allUsers}</div>
      <div>
        {pages.map(p => (
          <span
            key={p}
            onClick={() => {
              props.changeCurrent(p);
            }}
            className={props.currentPage === p ? s.selected : s.common}
          >
            {p}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Users;
