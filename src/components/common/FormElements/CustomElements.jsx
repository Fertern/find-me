import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { StyledCheckbox } from "./CustomStyles";
import TextField from "@material-ui/core/TextField";
import { Select } from "@material-ui/core";

const CustomInput = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div>
      <input error={!!hasError} {...input} {...props} />
    </div>
  );
};
export default CustomInput;

export const CustomInputFilled = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div>
      <TextField
        error={!!hasError}
        fullWidth
        variant="filled"
        {...input}
        {...props}
      />
    </div>
  );
};

export const CustomSelect = ({ input, meta, ...props }) => {
  return <Select fullWidth {...input} {...props} />;
};

export const CustomInputLogin = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div>
      <TextField
        error={!!hasError}
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
    <div>
      <TextField
        error={!!hasError}
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
  return (
    <div>
      <StyledCheckbox
        control={<Checkbox value={true} color="primary" />}
        label="Remember me"
        type="checkbox"
        {...input}
      />
    </div>
  );
};

export const CustomTextareaFilled = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div>
      <TextField
        error={!!hasError}
        multiline
        rows="4"
        variant="filled"
        fullWidth
        {...input}
        {...props}
      />
    </div>
  );
};
