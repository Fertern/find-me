import React from "react";
import LoginForm from "./LoginForm/LoginForm";
import { Redirect } from "react-router-dom";

const Login = ({ login, isAuth, capthcaUrl }) => {
  if (isAuth) return <Redirect to={"/profile"} />;
  return (
    <div>
      <h1>Login</h1>
      <LoginForm login={login} capthcaUrl={capthcaUrl} />
    </div>
  );
};

export default Login;
