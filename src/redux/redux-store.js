import { createStore, combineReducers } from "redux";
import profilePageReducer from "./profilePageReducer";
import dialogsPageReducer from "./dialogsPageReducer";
import navBarReducer from "./navBarReducer";

let reducers = combineReducers({
  profilePage: profilePageReducer,
  dialogsPage: dialogsPageReducer,
  navBar: navBarReducer
});

let store = createStore(reducers);

export default store;
