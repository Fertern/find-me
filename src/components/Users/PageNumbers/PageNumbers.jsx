import React from "react";
import s from "./PageNumbers.module.css";

const PageNumbers = ({
  page,
  usersCount,
  changeCurrent,
  currentPage,
  setStartNumberInRow,
  startNumberInRow
}) => {
  const pageCount = Math.ceil(usersCount / page);
  const isPhoneView = window.matchMedia(`(max-width: 425px)`).matches;
  const pages = [];
  const isPrevCorrect = startNumberInRow !== 1;
  let isNextCorrect = true;
  let i = startNumberInRow;
  let pagesInRow = 10;
  if (isPhoneView) {
    pagesInRow = 5;
  }
  const PreviousRow = () => {
    const newPrevRow = startNumberInRow - pagesInRow;
    setStartNumberInRow(newPrevRow);
  };
  const NextRow = () => {
    const newNextRow = startNumberInRow + pagesInRow;
    setStartNumberInRow(newNextRow);
  };

  for (let x = 0; x < pagesInRow; x++) {
    if (i > pageCount) {
      isNextCorrect = false;
      break;
    }
    pages.push(i);
    i++;
  }
  isNextCorrect = startNumberInRow + 10 <= pageCount;
  return (
    <div className={s.wrapper}>
      {isPrevCorrect ? (
        <button onClick={PreviousRow}>Prev</button>
      ) : (
        <span></span>
      )}
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
      {isNextCorrect ? <button onClick={NextRow}>Next</button> : <span></span>}
    </div>
  );
};

export default PageNumbers;
