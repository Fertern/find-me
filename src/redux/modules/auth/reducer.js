import { SET_AUTH, UNSET_AUTH, SUCCESS_CAPTCHA } from "./selectors";

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

export default authReducer;
