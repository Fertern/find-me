import { profileAPI } from "../api/api";

const SET_AUTH = "SET-AUTH";
const UNSET_AUTH = "UNSET-AUTH";

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
  let data = await profileAPI.authMe();
  if (data.resultCode === 0) {
    let { id, login, email } = data.data;
    dispatch(setAuth(id, login, email));
  }
  if (data.resultCode === 1) {
    dispatch(unsetAuth());
  }
};

export default authReducer;
