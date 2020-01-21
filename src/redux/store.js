import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { reducer as formReducer } from "redux-form";
import thunkMiddleware from "redux-thunk";
import profilePageReducer from "./modules/profilePage/reducer";
import dialogsPageReducer from "./modules/dialogsPage/reducer";
import usersReducer from "./modules/users/reducer";
import authReducer from "./modules/auth/reducer";
import errorsReducer from "./modules/errors/reducer";

const reducers = combineReducers({
  profilePage: profilePageReducer,
  dialogsPage: dialogsPageReducer,
  usersPage: usersReducer,
  auth: authReducer,
  errors: errorsReducer,
  form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
