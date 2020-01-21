import React from "react";
import { requiredField, maxLengthCreator } from "../../../utils/validators";
import { reduxForm } from "redux-form";
import CustomInput, {
  CustomInputPassword,
  CustomInputLogin,
  CustomInputRememberMe
} from "../../common/FormElements/CustomElements";
import Button from "@material-ui/core/Button";
import { ThemeProvider } from "@material-ui/core/styles";
import { fieldGenerator } from "../../../utils/fieldGenerator";
import { blueTheme } from "../../../materialUI/blueTheme";
import { useStyles } from "./LoginFormMaterial";

const maxLength25 = maxLengthCreator(25);
const maxLength30 = maxLengthCreator(30);
const LoginForm = ({ handleSubmit, login, capthcaUrl, error }) => {
  const classes = useStyles();
  const submit = ({ email, password, rememberMe, captcha }) => {
    login(email, password, rememberMe, captcha);
  };
  const customSubmit = handleSubmit(submit);
  return (
    <ThemeProvider theme={blueTheme}>
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

        <div>
          {fieldGenerator(
            "rememberMe",
            null,
            CustomInputRememberMe,
            "checkbox"
          )}
        </div>
        {capthcaUrl && <img src={capthcaUrl} alt="" />}
        {capthcaUrl &&
          fieldGenerator("captcha", "Write here", CustomInput, "text", [
            requiredField,
            maxLength25
          ])}

        <Button
          type="submit"
          fullWidth
          variant="contained"
          className={classes.submit}
          color="primary"
        >
          Sign In
        </Button>
        <Button
          fullWidth
          variant="contained"
          className={classes.enterGuest}
          color="primary"
          onClick={() => {
            login("free@samuraijs.com", "free");
          }}
        >
          Enter as a guest
        </Button>
      </form>
    </ThemeProvider>
  );
};

export default reduxForm({
  form: "login"
})(LoginForm);
