import { makeStyles } from "@material-ui/core/styles";

export const AvatarBarEditingStyles = makeStyles(theme => ({
  avatar: {
    width: "100%",
    height: "85%",
    backgroundColor: "var(--primaryColor)"
  }
}));

export const AvatarBarStyles = makeStyles(theme => ({
  avatar: {
    width: "100%",
    height: "100%",
    backgroundColor: "var(--primaryColor)"
  },
  wrapper: {
    width: theme.spacing(30),
    height: theme.spacing(30),
    padding: "10px 15px",
    backgroundColor: "var(--primaryColor)"
  },
  inputButton: {
    width: "100%"
  }
}));
