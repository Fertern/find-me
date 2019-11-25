import React from "react";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import "./styles/App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

//arrays
const App = props => {
  return (
    <Router>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <Nav />
          <div className="app-content">
            <Route
              path="/dialogs"
              render={() => <Dialogs state={props.state.dialogsPage} />}
            />
            <Route
              path="/profile"
              render={() => <Profile state={props.state.profilePage} />}
            />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
