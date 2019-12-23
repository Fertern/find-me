import React from "react";
import User from "./User/User";
import s from "./Users.module.css";
//import Axios from "axios";

const Users = props => {
  if (props.userList.length === 0) {
    props.setUsers([
      {
        logo:
          "https://i.pinimg.com/originals/51/40/69/5140696fcc077099bd92525eed882e7c.jpg",
        id: 1,
        name: "Fedor",
        location: {
          country: "Ukraine",
          city: "Lviv"
        },
        description: "What a beautiful Duwang",
        followed: false
      },
      {
        logo:
          "https://i.pinimg.com/originals/51/40/69/5140696fcc077099bd92525eed882e7c.jpg",
        id: 2,
        name: "Gregor",
        location: {
          country: "Belarus",
          city: "Minsk"
        },
        description: "chew",
        followed: false
      }
    ]);
  }

  let allUsers = props.userList.map(u => (
    <User
      id={u.id}
      key={u.id}
      logo={u.logo}
      followed={u.followed}
      name={u.name}
      description={u.description}
      country={u.location.country}
      city={u.location.city}
      follow={props.follow}
      unfollow={props.unfollow}
    />
  ));
  return (
    <div className={s.wrapper}>
      <div className={s.label}>Users</div>
      <div className={s.allUsers}>{allUsers}</div>
      <div className={s.show}>Show more</div>
    </div>
  );
};

export default Users;
