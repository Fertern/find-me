import { makeStyles } from "@material-ui/styles";

export const pageNumbersStyles = makeStyles({
  wrapper: {
    display: "flex",
    margin: "5px auto",
    backgroundColor: "inherit",
    alignItems: "center"
  },
  prev: {
    marginRight: "5px"
  },
  next: {
    marginLeft: "5px"
  },

  common: {
    margin: "0 5px"
  },
  selected: {
    margin: "0 5px",
    fontWeight: "bold",
    color: "var(--focusColor)"
  }
});
