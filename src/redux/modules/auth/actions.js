import { authAPI, securityAPI } from "../../../api/api";
import { stopSubmit } from "redux-form";
import { thunkErrorDecorator } from "../../../utils/thunkErrorDecorator";
import { showError } from "../errors/actions";
import { SET_AUTH, UNSET_AUTH, SUCCESS_CAPTCHA } from "./selectors";

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

export const checkAuth = thunkErrorDecorator(() => async dispatch => {
  let data = await authAPI.authMe();
  if (data.resultCode === 0) {
    let { id, login, email } = data.data;
    dispatch(setAuth(id, login, email));
  }
  if (data.resultCode === 1) {
    dispatch(unsetAuth());
  }
});
export const login = thunkErrorDecorator(
  (email, password, rememberMe, captcha = null) => async dispatch => {
    let data = await authAPI.login(email, password, rememberMe, captcha);
    if (data.resultCode === 0) {
      dispatch(checkAuth());
    } else {
      if (data.resultCode === 10) {
        dispatch(getCaptcha());
      }
      dispatch(stopSubmit("login", { _error: data.messages }));
      dispatch(showError(data.messages));
    }
  }
);
export const logout = thunkErrorDecorator(() => async dispatch => {
  let data = await authAPI.logout();
  if (data.resultCode === 0) {
    dispatch(unsetAuth());
  }
});
export const getCaptcha = thunkErrorDecorator(() => async dispatch => {
  let data = await securityAPI.getCaptcha();
  const capthcaUrl = data.url;
  dispatch(successCaptcha(capthcaUrl));
});
