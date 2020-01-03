import { profileAPI } from "../api/api";

const SET_AUTH = "SET_AUTH";

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        ...action.data,
        isAuth: true
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
});

export const checkAuth = () => dispatch => {
  (async () => {
    let data = await profileAPI.authMe();
    if (data.resultCode === 0) {
      let { id, login, email } = data.data;
      dispatch(setAuth(id, login, email));
    }
  })();
};

export default authReducer;
