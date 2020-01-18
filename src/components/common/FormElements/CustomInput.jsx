import React from "react";
import s from "./CustomInput.module.css";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const StyledInputLogin = withStyles({
  root: {
    "& .MuiFormLabel-root": {
      color: "white"
    },
    "& label.Mui": {
      color: "#3490CE"
    },
    "& label.Mui-focused": {
      color: "white"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "blue"
    },
    "& .MuiFilledInput-underline:after": {
      borderBottom: "2px solid #3490CE"
    },
    "& .MuiFilledInput-underline:before": {
      borderBottom: "2px solid #2C485F"
    },
    "& .MuiFormHelperText-root": {
      color: "red",
      fontSize: "15px"
    },
    "& .MuiFilledInput-root": {
      color: "white",
      "& fieldset": {
        border: "2px solid #3490CE"
      },
      "& :hover fieldset": {
        border: "2px solid white"
      },
      "& .Mui-focused fieldset": {
        border: "2px solid #3490CE"
      }
    }
  }
})(TextField);

const StyledCheckbox = withStyles({
  root: {
    "& .MuiTypography-root .MuiFormControlLabel-label .MuiTypography-body1": {
      color: "white"
    },
    "& .MuiCheckbox-colorPrimary.Mui-checked": {
      color: "white"
    },
    "& .MuiCheckbox-colorPrimary .Mui-checked": {
      color: "3490CE"
    },
    "& .MuiFormControlLabel-label": {
      color: "white",
      fontSize: "18px",
      marginTop: "2px"
    },
    "& .MuiCheckbox-root": {
      color: "white"
    }
  }
})(FormControlLabel);

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
