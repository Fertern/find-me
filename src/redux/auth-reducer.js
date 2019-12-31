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
        ...action.data
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

export default authReducer;
