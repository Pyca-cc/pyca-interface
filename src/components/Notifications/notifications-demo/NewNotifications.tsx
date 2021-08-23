import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

import s from "./ListGroup.module.scss";

const avatar = "https://cdn.pixabay.com/photo/2015/05/24/16/47/fantasy-782001_960_720.jpg";

function NewNotificationsDemo() {
  return (
    <ListGroup className={[s.listGroup, "thin-scroll"].join(" ")}>
      <ListGroupItem className={`${s.listGroupItem} bg-attention`}>
        <span className={[s.notificationIcon, "thumb-sm"].join(" ")}>
          <img className="rounded-circle" src={avatar} alt="..." />
        </span>
        <p className="m-0 overflow-hidden">
          1 issue require your approval.
          {/* eslint-disable */}
          &nbsp;<a href="#">Connect</a> to complete
          {/* eslint-enable */}
          <time className="help-block m-0">just now</time>
        </p>
      </ListGroupItem>
    </ListGroup>
  );
}

export default NewNotificationsDemo;
