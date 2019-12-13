import React from "react";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import "./styles/App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

//arrays
const App = props => {
  console.log(props.state);
  return (
    <Router>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <Nav state={props.state.navBar} />
          <div className="app-content">
            <Route
              path="/dialogs"
              render={() => (
                <Dialogs
                  state={props.state.dialogsPage}
                  dispatch={props.dispatch}
                />
              )}
            />
            <Route
              path="/profile"
              render={() => (
                <Profile
                  state={props.state.profilePage}
                  dispatch={props.dispatch}
                />
              )}
            />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
