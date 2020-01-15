import React from "react";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import "./styles/App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import NavContainer from "./components/Nav/NavContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import MobileMenu from "./components/Nav/MobileMenu/MobileMenu";
import LoginContainer from "./components/Login/LoginContainer";

const App = () => {
  return (
    <Router>
      <hr className="decor"></hr>
      <div className="container">
        <div className="app-wrapper">
          <HeaderContainer />
          <NavContainer />
          <div className="app-content">
            <Route exact path="/" render={() => <Redirect to={"/profile"} />} />
            <Route path="/dialogs" render={() => <DialogsContainer />} />
            <Route
              path="/profile/:userId?"
              render={() => <ProfileContainer />}
            />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/menu" render={() => <MobileMenu />} />
            <Route path="/login" render={() => <LoginContainer />} />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
