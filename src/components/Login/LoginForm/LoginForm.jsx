import React from "react";
import {
  requiredField,
  maxLengthCreator
} from "../../../Utils/validators/validators";
import { reduxForm } from "redux-form";
import CustomInput, {
  CustomInputPassword,
  CustomInputLogin,
  CustomInputRememberMe
} from "../../common/FormElements/CustomInput";
import s from "./LoginForm.module.css";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { fieldGenerator } from "../../../Utils/fieldGenerator";

const useStyles = makeStyles(theme => ({
  form: {
    width: "100%",
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  login: {}
}));

const maxLength25 = maxLengthCreator(25);
const maxLength30 = maxLengthCreator(30);
const LoginForm = ({ handleSubmit, login, capthcaUrl, error }) => {
  const classes = useStyles();
  const submit = ({ email, password, rememberMe, captcha }) => {
    login(email, password, rememberMe, captcha);
  };
  const customSubmit = handleSubmit(submit);
  return (
    <form onSubmit={customSubmit} className={classes.form}>
      {fieldGenerator(
        ["email", "password"],
        ["Email", "Password"],
        [CustomInputLogin, CustomInputPassword],
        ["text", "password"],
        [
          [requiredField, maxLength25],
          [requiredField, maxLength30]
        ],
        "custom"
      )}

      <div className={s.checkbox}>
        {fieldGenerator("rememberMe", null, CustomInputRememberMe, "checkbox")}
      </div>
      {capthcaUrl && <img src={capthcaUrl} alt="" />}
      {capthcaUrl &&
        fieldGenerator("captcha", "Write here", CustomInput, "text", [
          requiredField,
          maxLength25
        ])}
      <div className="">
        <Button
          type="submit"
          fullWidth
          variant="contained"
          className={classes.submit}
        >
          Sign In
        </Button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "login"
})(LoginForm);
