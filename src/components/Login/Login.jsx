import React from "react";
import LoginForm from "./LoginForm/LoginForm";
import { Redirect } from "react-router-dom";

const Login = props => {
  const { login, isAuth } = props;
  if (isAuth) return <Redirect to={"/profile"} />;
  return (
    <div>
      <h1>Login</h1>
      <LoginForm login={login} />
    </div>
  );
};

export default Login;
