import React, { useState, useLayoutEffect } from "react";
import Fab from "@material-ui/core/Fab";
import { pageNumbersStyles } from "./PageNumbersMaterial";
import Paper from "@material-ui/core/Paper";

import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

const PageNumbers = ({
  page,
  usersCount,
  changeCurrent,
  currentPage,
  setStartNumberInRow,
  startNumberInRow
}) => {
  const { wrapper, common, selected, prev, next } = pageNumbersStyles();
  const pageCount = Math.ceil(usersCount / page);
  const [isPhoneView, setIsPhoneView] = useState(
    window.matchMedia(`(max-width: 425px)`).matches
  );
  useLayoutEffect(() => {
    const updateView = () => {
      setIsPhoneView(window.matchMedia(`(max-width: 425px)`).matches);
    };
    window.addEventListener("resize", updateView);
    updateView();
    return () => window.removeEventListener("resize", updateView);
  }, []);

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
    <Paper elevation={0} className={wrapper}>
      <Fab
        disabled={!isPrevCorrect}
        size="small"
        onClick={PreviousRow}
        className={prev}
      >
        <ArrowLeftIcon />
      </Fab>

      <div>
        {pages.map(pageNumber => (
          <Fab
            disabled={pageNumber === currentPage}
            size="small"
            key={pageNumber}
            onClick={() => {
              changeCurrent(pageNumber);
            }}
            className={currentPage === pageNumber ? selected : common}
          >
            {pageNumber}
          </Fab>
        ))}
      </div>

      <Fab
        disabled={!isNextCorrect}
        size="small"
        onClick={NextRow}
        className={next}
      >
        <ArrowRightIcon />
      </Fab>
    </Paper>
  );
};

export default React.memo(PageNumbers);
