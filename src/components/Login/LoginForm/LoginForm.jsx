import React from "react";
import {
  requiredField,
  maxLengthCreator
} from "../../../Utils/validators/validators";
import { reduxForm } from "redux-form";
import CustomInput from "../../common/FormElements/CustomInput";
import s from "./LoginForm.module.css";
import { fieldGenerator } from "../../../Utils/fieldGenerator";

const maxLength25 = maxLengthCreator(25);
const LoginForm = ({ handleSubmit, login, capthcaUrl, error }) => {
  const submit = ({ email, password, rememberMe, captcha }) => {
    login(email, password, rememberMe, captcha);
  };
  const customSubmit = handleSubmit(submit);
  return (
    <form onSubmit={customSubmit}>
      {fieldGenerator(
        ["email", "password"],
        ["Email", "Password"],
        CustomInput,
        ["text", "password"],
        [requiredField, maxLength25],
        "same"
      )}
      <div className={s.checkbox}>
        {fieldGenerator("rememberMe", null, "input", "checkbox")}
      </div>
      {capthcaUrl && <img src={capthcaUrl} alt="" />}
      {capthcaUrl &&
        fieldGenerator("captcha", "Write here", CustomInput, "text", [
          requiredField,
          maxLength25
        ])}
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
