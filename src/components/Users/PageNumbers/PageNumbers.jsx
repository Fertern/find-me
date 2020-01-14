import React from "react";
import s from "./PageNumbers.module.css";

const PageNumbers = ({ page, usersCount, changeCurrent, currentPage }) => {
  let pageCount = Math.ceil(usersCount / page);
  //const realPageCount = pageCount;
  if (pageCount > 10) {
    pageCount = 10;
  }
  let pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map(p => (
        <span
          key={p}
          onClick={() => {
            changeCurrent(p);
          }}
          className={currentPage === p ? s.selected : s.common}
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default PageNumbers;
