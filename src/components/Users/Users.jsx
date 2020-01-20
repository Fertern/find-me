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
  isPageLoading,
  setStartNumberInRow,
  startNumberInRow
}) => {
  const allUsers = userList.map(u => (
    <User
      id={u.id}
      key={u.id}
      logo={u.photos}
      followed={u.followed}
      name={u.name}
      followUser={followUser}
      unFollowUser={unFollowUser}
      followInProgressList={followInProgressList}
    />
  ));

  return (
    <div className={s.wrapper}>
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
        setStartNumberInRow={setStartNumberInRow}
        startNumberInRow={startNumberInRow}
      />
    </div>
  );
};

export default Users;
