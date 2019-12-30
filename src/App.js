import React from "react";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Header from "./components/Header/Header";
import "./styles/App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavContainer from "./components/Nav/NavContainer";
import UsersContainer from "./components/Users/UsersContainer";

//arrays
const App = props => {
  return (
    <Router>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <NavContainer />
          <div className="app-content">
            <Route path="/dialogs" render={() => <DialogsContainer />} />
            <Route
              path="/profile/:userId?"
              render={() => <ProfileContainer />}
            />
            <Route path="/users" render={() => <UsersContainer />} />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
