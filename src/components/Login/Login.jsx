import React from "react";
import { reduxForm, Field } from "redux-form";
import CustomInput from "../common/FormElements/CustomInput";
import {
  requiredField,
  maxLengthCreator
} from "../../Utils/validators/validators";

const maxLength20 = maxLengthCreator(20);
const LoginForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="">
        <Field
          name={"login"}
          placeholder="Login"
          component={CustomInput}
          validate={[requiredField, maxLength20]}
        />
      </div>
      <div className="">
        <Field
          name={"password"}
          placeholder="Password"
          component={CustomInput}
          validate={[requiredField, maxLength20]}
        />
      </div>
      <div className="">
        <Field name={"remember"} component={"input"} type="checkbox" />
      </div>
      <div className="">
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login"
})(LoginForm);

const Login = () => {
  const onSubmit = formData => {
    console.log(formData);
  };
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
