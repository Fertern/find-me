import React from "react";
import User from "./User/User";
import style from "./Users.module.css";
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
  const allUsers = userList.map(userInList => (
    <User
      id={userInList.id}
      key={userInList.id}
      logo={userInList.photos}
      followed={userInList.followed}
      name={userInList.name}
      followUser={followUser}
      unFollowUser={unFollowUser}
      followInProgressList={followInProgressList}
    />
  ));

  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        {isPageLoading ? (
          <div className={style.preloader}>
            <Preloader />
          </div>
        ) : (
          <div className={style.allUsers}>{allUsers}</div>
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
