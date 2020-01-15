import { createSelector } from "reselect";

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
