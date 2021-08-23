import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

import s from "./ListGroup.module.scss"; // eslint-disable-line

const avatar = "https://cdn.pixabay.com/photo/2015/05/24/16/47/fantasy-782001_960_720.jpg";

function MessagesDemo() {
  return (
    <ListGroup className={[s.listGroup, "thin-scroll"].join(" ")}>
      <ListGroupItem className={s.listGroupItem}>
        <span className={[s.notificationIcon, "thumb-sm"].join(" ")}>
          <img className="rounded-circle" src={avatar} alt="..." />
          <i className="status status-bottom bg-success" />
        </span>
        <time className="text-link help float-right">2 min ago</time>
        <h6 className="m-0 mb-1">Isaac Woodard</h6>
        <p className="deemphasize text-ellipsis m-0">
          I hope people don't forget me
        </p>
      </ListGroupItem>
    </ListGroup>
  );
}

export default MessagesDemo;
