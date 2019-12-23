import React from "react";
import Friend from "./Friend/Friend";
import s from "./Friends.module.css";

export default function Friends(props) {
  let friends = props.friendList.map(f => (
    <Friend logo={f.logo} key={f.id} name={f.name} />
  ));
  return (
    <div className={s.wrapper}>
      <div className={s.title}>Friends</div>
      <div className={s.friends}>{friends}</div>
    </div>
  );
}
