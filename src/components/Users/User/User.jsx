import React from "react";
import s from "./User.module.css";
import { NavLink } from "react-router-dom";

import { Button } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const User = ({
  id,
  followUser,
  unFollowUser,
  followed,
  logo: { small, large },
  followInProgressList,
  name
}) => {
  return (
    <List>
      <ListItem>
        <NavLink to={"/profile/" + id}>
          <ListItemAvatar>
            {large || small ? (
              <Avatar alt={name} variant="rounded" src={large || small} />
            ) : (
              <AccountCircleIcon
                style={{ color: "rgba(0, 0, 0, 0.54)" }}
                fontSize="large"
              />
            )}
          </ListItemAvatar>
        </NavLink>
        <ListItemText
          primary={
            <NavLink style={{ color: "rgb(24, 66, 95)" }} to={"/profile/" + id}>
              {name}
            </NavLink>
          }
        />
        <Button
          variant="outlined"
          disabled={followInProgressList.some(listId => listId === id)}
          className={s.follow}
          onClick={() => {
            followed ? unFollowUser(id) : followUser(id);
          }}
        >
          {followed ? "Unfollow" : "Follow"}
        </Button>
      </ListItem>
    </List>
  );
};

export default User;
