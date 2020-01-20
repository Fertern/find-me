import React from "react";
import LoginForm from "./LoginForm/LoginForm";
import { Redirect } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const Copyright = () => {
  return (
    <Typography variant="body1" color="textSecondary" align="center">
      {"created by Fertern © "}
      <Link color="inherit" href="https://github.com/Fertern">
        https://github.com/Fertern
      </Link>
    </Typography>
  );
};
const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1)
  },
  label: {
    color: "white",
    fontSize: "30px"
  }
}));

const Login = ({ login, isAuth, capthcaUrl }) => {
  const classes = useStyles();
  if (isAuth) return <Redirect to={"/profile"} />;
  return (
    <Container style={{ minHeight: "800px" }} component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <div className={classes.avatar}>
          <AccountCircleIcon style={{ fontSize: "60px" }} />
        </div>
        <div className={classes.label}>Sign in</div>
        <LoginForm login={login} capthcaUrl={capthcaUrl} />
      </div>
      <Box mt={6}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default Login;
