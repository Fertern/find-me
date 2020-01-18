import React from "react";
import s from "./CustomInput.module.css";
import Checkbox from "@material-ui/core/Checkbox";
import { StyledInputLogin, StyledCheckbox } from "./CustomStyles";

const CustomInput = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={s.wrapper + " " + (hasError ? s.error : "")}>
      <input {...input} {...props} />
    </div>
  );
};
export default CustomInput;

export const CustomInputLogin = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={s.wrapper + " " + (hasError ? s.error : "")}>
      <StyledInputLogin
        variant="filled"
        margin="normal"
        fullWidth
        id="email"
        label="Email"
        autoComplete="email"
        size="medium"
        helperText={hasError ? meta.error : null}
        {...input}
        {...props}
      />
    </div>
  );
};

export const CustomInputPassword = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={s.wrapper + " " + (hasError ? s.error : "")}>
      <StyledInputLogin
        type="password"
        variant="filled"
        margin="normal"
        fullWidth
        label="Password"
        id="password"
        autoComplete="current-password"
        size="medium"
        helperText={hasError ? meta.error : null}
        {...input}
        {...props}
      />
    </div>
  );
};

export const CustomInputRememberMe = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={s.wrapper + " " + (hasError ? s.error : "")}>
      <StyledCheckbox
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
        type="checkbox"
      />
    </div>
  );
};
