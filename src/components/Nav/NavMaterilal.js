import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  paper: {
    marginRight: theme.spacing(2),
    backgroundColor: "transparent",
    border: "none",
    boxShadow: "none"
  },
  item: {
    fontSize: "2.5em",
    textDecoration: "none",
    color: "var(--primaryColor)",
    "&:focus": {
      color: "var(--secondaryColor)"
    },
    display: "flex",
    alignItems: "inherit"
  },
  icon: {
    color: "inherit",
    fontSize: "40px",
    marginRight: "5px"
  }
}));
