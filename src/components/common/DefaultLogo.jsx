import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  avatar: {
    width: 210,
    height: 200,
    backgroundColor: "var(--primaryColor)"
  }
}));

const DefaultLogo = ({ alt, size }) => {
  const { avatar } = useStyles();
  return (
    <Avatar alt={alt} variant="rounded" className={avatar}>
      <AccountCircleIcon
        style={{
          fontSize: size,
          color: "rgba(0, 0, 0, 0.54)"
        }}
      />
    </Avatar>
  );
};

export default DefaultLogo;
