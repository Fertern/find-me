import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export const StyledInputLogin = withStyles({
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

export const StyledCheckbox = withStyles({
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
