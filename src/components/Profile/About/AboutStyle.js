import { makeStyles } from "@material-ui/core";

export const aboutStyle = makeStyles({
  wrapper: {
    minWidth: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "var(--primaryColor)"
  },
  content: {
    height: "100%",
    display: "flex",
    minWidth: "300px",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  edit: {},
  nameBlock: {
    display: "flex",
    justifyContent: "space-between"
  },
  lookingForAJob: {},
  lookTrue: {
    color: "rgb(21, 135, 21)",
    textAlign: "center"
  },
  lookFalse: {
    color: "rgba(88, 16, 16, 0.789)",
    textAlign: "center"
  },
  nameText: {
    maxWidth: "220px"
  },
  statusInput: {
    width: "100%"
  },
  inputWrapper: {
    marginTop: "5px"
  }
});
