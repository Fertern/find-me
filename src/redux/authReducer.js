import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_AUTH = "/auth/SET-AUTH";
const UNSET_AUTH = "/auth/UNSET-AUTH";

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  isLoading: true
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        ...action.data,
        isAuth: true,
        isLoading: false
      };
    case UNSET_AUTH:
      return {
        ...state,
        userId: null,
        email: null,
        login: null,
        isAuth: false,
        isLoading: false
      };

    default:
      return state;
  }
};
export const setAuth = (userId, email, login) => ({
    type: SET_AUTH,
    data: {
      userId,
      email,
      login
    }
  }),
  unsetAuth = () => ({
    type: UNSET_AUTH
  });

export const checkAuth = () => async dispatch => {
    let data = await authAPI.authMe();
    if (data.resultCode === 0) {
      let { id, login, email } = data.data;
      dispatch(setAuth(id, login, email));
    }
    if (data.resultCode === 1) {
      dispatch(unsetAuth());
    }
  },
  login = (email, password, rememberMe) => async dispatch => {
    let data = await authAPI.login(email, password, rememberMe);
    if (data.resultCode === 0) {
      dispatch(checkAuth());
    } else {
      dispatch(stopSubmit("login", { _error: data.messages }));
    }
  },
  logout = () => async dispatch => {
    let data = await authAPI.logout();
    if (data.resultCode === 0) {
      dispatch(unsetAuth());
    }
  };

export default authReducer;
