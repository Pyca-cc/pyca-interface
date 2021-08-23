import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

import s from "./ListGroup.module.scss";

const avatar = "https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293_960_720.jpg";

function NotificationsDemo() {
  return (
    <ListGroup className={[s.listGroup, "thin-scroll"].join(" ")}>
      <ListGroupItem className={s.listGroupItem}>
        <span className={[s.notificationIcon, "thumb-sm"].join(" ")}>
          <img className="rounded-circle" src={avatar} alt="..." />
        </span>
        <p className="m-0 overflow-hidden">
          1 new user just signed up! Check out
          {/* eslint-disable */}
          &nbsp;<a href="#">George Stinney</a>'s account.
          {/* eslint-enable */}
          <time className="help-block m-0">2 mins ago</time>
        </p>
      </ListGroupItem>
    </ListGroup>
  );
}

export default NotificationsDemo;
