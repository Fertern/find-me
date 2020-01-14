import React from "react";
import User from "./User/User";
import s from "./Users.module.css";
import PageNumbers from "./PageNumbers/PageNumbers";
import Preloader from "../common/Preloader/Preloader";

const Users = ({
  page,
  usersCount,
  userList,
  followUser,
  unFollowUser,
  followInProgressList,
  changeCurrent,
  currentPage,
  isPageLoading
}) => {
  const allUsers = userList.map(u => (
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
      followUser={followUser}
      unFollowUser={unFollowUser}
      followInProgressList={followInProgressList}
    />
  ));

  return (
    <div className={s.wrapper}>
      <div className={s.label}>Users</div>
      <div className={s.content}>
        {isPageLoading ? (
          <div className={s.preloader}>
            <Preloader />
          </div>
        ) : (
          <div className={s.allUsers}>{allUsers}</div>
        )}
      </div>

      <PageNumbers
        page={page}
        usersCount={usersCount}
        changeCurrent={changeCurrent}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Users;
