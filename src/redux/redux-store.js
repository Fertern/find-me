import { createStore, combineReducers } from "redux";
import profilePageReducer from "./profilePageReducer";
import dialogsPageReducer from "./dialogsPageReducer";
import navBarReducer from "./navBarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
  profilePage: profilePageReducer,
  dialogsPage: dialogsPageReducer,
  navBar: navBarReducer,
  usersPage: usersReducer,
  auth: authReducer
});

let store = createStore(reducers);

window.store = store;

export default store;
