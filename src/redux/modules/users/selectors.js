import { createSelector } from "reselect";

export const FOLLOW_USER = "/users/FOLLOW-USER",
  UNFOLLOW_USER = "/users/UNFOLLOW-USER",
  SET_USERS = "/users/SET-USERS",
  SET_CURRENT = "/users/SET-CURRENT",
  SET_COUNT = "/users/SET-ALL-COUNT",
  TOGGLE_PAGE_LOADER_STATUS = "/users/TOGGLE-LOADER",
  TOGGLE_FOLLOW_LOADER_STATUS = "/users/TOGGLE-FOLLOW-LOADER-STATUS",
  SET_START_NUMBER_IM_ROW = "./users/SET-START-NUMBER-IM-ROW";

// Common selectors, for test 'reselect' lib
export const getUserList = state => state.usersPage.userList;
//
export const getPageSize = state => state.usersPage.onPageUsersCount;
//
export const getUsersCount = state => state.usersPage.usersCount;
//
export const getCurrentPage = state => state.usersPage.currentPage;
//
export const getIsPageLoading = state => state.usersPage.isPageLoading;
//
export const getFollowInProgress = state =>
  state.usersPage.followInProgressList;
//
export const getPageCount = state => state.usersPage.page;
//
export const getStartNumberInRow = state => state.usersPage.startNumberInRow;

// Uncommon selector test
export const getSuper = createSelector(getUserList, userList => {
  userList.filter(user => true);
});
