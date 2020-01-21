import React from "react";
import ProfileContainer from "./components/Profile/ProfileContainer";
import "./styles/App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import NavContainer from "./components/Nav/NavContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import withSuspense from "./hoc/withSuspense";
import "react-toastify/dist/ReactToastify.css";
import ErrorNotification from "./components/ErrorNotification/ErrorNotification";
import Preloader from "./components/common/Preloader/Preloader";
import { useSelector } from "react-redux";
import { authStyleChanger } from "./Utils/authStyleChanger";
import PageNotFound from "./components/PageNotFound/PageNotFound";

const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);

const App = () => {
  const { authenticated, loaded } = useSelector(state => ({
    authenticated: state.auth.isAuth,
    loaded: state.auth.isLoading
  }));
  const appWrapperStyle = authStyleChanger(authenticated);
  if (loaded) {
    return (
      <div className="Preloader">
        <Preloader />
      </div>
    );
  }
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <hr className="decor"></hr>
      <div className="container">
        <ErrorNotification />
        <div className={appWrapperStyle}>
          <HeaderContainer />
          <NavContainer />
          <div className="app-content">
            <Route exact path="/" render={() => <Redirect to={"/profile"} />} />
            <Switch>
              <Route path="/dialogs" render={withSuspense(DialogsContainer)} />
              <Route
                path="/profile/:userId?"
                render={() => <ProfileContainer />}
              />
              <Route path="/users" render={() => <UsersContainer />} />
              <Route path="/login" render={() => <LoginContainer />} />
              <Route path="*" render={() => <PageNotFound />} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
