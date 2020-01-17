import { authAPI, securityAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_AUTH = "/auth/SET-AUTH";
const UNSET_AUTH = "/auth/UNSET-AUTH";
const SUCCESS_CAPTCHA = "/auth/SUCCESS_CAPTHCA";

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  isLoading: true,
  capthcaUrl: null
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
    case SUCCESS_CAPTCHA:
      return {
        ...state,
        capthcaUrl: action.capthcaUrl
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
  }),
  successCaptcha = capthcaUrl => ({
    type: SUCCESS_CAPTCHA,
    capthcaUrl
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
  login = (email, password, rememberMe, captcha = null) => async dispatch => {
    let data = await authAPI.login(email, password, rememberMe, captcha);
    if (data.resultCode === 0) {
      dispatch(checkAuth());
    } else {
      if (data.resultCode === 10) {
        dispatch(getCaptcha());
      }
      dispatch(stopSubmit("login", { _error: data.messages }));
    }
  },
  logout = () => async dispatch => {
    let data = await authAPI.logout();
    if (data.resultCode === 0) {
      dispatch(unsetAuth());
    }
  },
  getCaptcha = () => async dispatch => {
    let data = await securityAPI.getCaptcha();
    const capthcaUrl = data.url;
    dispatch(successCaptcha(capthcaUrl));
  };

export default authReducer;
