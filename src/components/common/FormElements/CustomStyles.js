import { withStyles } from "@material-ui/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";

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
