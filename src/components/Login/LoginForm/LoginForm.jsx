import React from "react";
import {
  requiredField,
  maxLengthCreator
} from "../../../Utils/validators/validators";
import { reduxForm, Field } from "redux-form";
import CustomInput from "../../common/FormElements/CustomInput";
import s from "./LoginForm.module.css";

const maxLength25 = maxLengthCreator(25);
const LoginForm = props => {
  const { handleSubmit, login, error } = props;
  const submit = values => {
    login(values.email, values.password, values.rememberMe);
  };
  const customSubmit = handleSubmit(submit);
  return (
    <form onSubmit={customSubmit}>
      <div className="">
        <Field
          name={"email"}
          placeholder="Email"
          component={CustomInput}
          validate={[requiredField, maxLength25]}
        />
      </div>
      <div className="">
        <Field
          name={"password"}
          placeholder="Password"
          type="password"
          component={CustomInput}
          validate={[requiredField, maxLength25]}
        />
      </div>
      <div className="">
        <Field name={"remember"} component={"input"} type="checkbox" />
      </div>
      {error && <div className={s.errorMessage}>{error}</div>}
      <div className="">
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "login"
})(LoginForm);
