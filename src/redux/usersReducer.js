const FOLLOW_USER = "FOLLOW-USER";
const UNFOLLOW_USER = "UNFOLLOW-USER";
const SET_USERS = "SET-USERS";
const SET_CURRENT = "SET-CURRENT";
const SET_COUNT = "SET-ALL-COUNT";
const TOGGLE_PAGE_LOADER_STATUS = "TOGGLE-LOADER";
const TOGGLE_FOLLOW_LOADER_STATUS = "TOGGLE-FOLLOW-LOADER-STATUS";

const initialState = {
  isPageLoaded: true,
  followInProgressList: [],
  userList: [],
  page: 1,
  onPageUsersCount: 4,
  usersCount: 0,
  currentPage: 1
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW_USER:
      return {
        ...state,
        userList: state.userList.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        })
      };

    case UNFOLLOW_USER:
      return {
        ...state,
        userList: state.userList.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        })
      };

    case SET_USERS:
      return {
        ...state,
        userList: action.userList
      };
    case SET_CURRENT:
      return {
        ...state,
        currentPage: action.current
      };
    case SET_COUNT:
      return {
        ...state,
        usersCount: action.count
      };
    case TOGGLE_PAGE_LOADER_STATUS:
      return {
        ...state,
        isPageLoaded: action.isPageLoaded
      };
    case TOGGLE_FOLLOW_LOADER_STATUS:
      return {
        ...state,
        followInProgressList: action.isPageLoaded
          ? [...state.followInProgressList, action.userId]
          : state.followInProgressList.filter(id => id !== action.userId)
      };

    default:
      return state;
  }
};
export const follow = userId => ({ type: FOLLOW_USER, userId }),
  unFollow = userId => ({ type: UNFOLLOW_USER, userId }),
  setUsers = userList => ({ type: SET_USERS, userList }),
  setCurrent = current => ({
    type: SET_CURRENT,
    current
  }),
  setCount = count => ({
    type: SET_COUNT,
    count
  }),
  toggleLoaderStatus = isPageLoaded => ({
    type: TOGGLE_PAGE_LOADER_STATUS,
    isPageLoaded
  }),
  toggleFollowStatus = (isPageLoaded, userId) => ({
    type: TOGGLE_FOLLOW_LOADER_STATUS,
    isPageLoaded,
    userId
  });

export default userReducer;
