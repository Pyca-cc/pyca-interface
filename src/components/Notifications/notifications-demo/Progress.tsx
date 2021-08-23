import React from "react";
import {
  ListGroup,
  ListGroupItem,
  Progress,
} from "reactstrap";

import s from "./ListGroup.module.scss"; // eslint-disable-line

function ProgressDemo() {
  return (
    <ListGroup className={[s.listGroup, "thin-scroll"].join(" ")}>
      <ListGroupItem className={s.listGroupItem}>
        <span className="text-muted float-right">100%</span>
        <h6 className="m-0 mb-1 deemphasize">
          <strong>Completed:</strong>
          &nbsp;Instruct newbies on coding standards
        </h6>
        <Progress
          className={["progress-xs", "m-0"].join(" ")}
          color="primary"
          value="100"
        />
        <span className="help-block">last update: Aug 23, 2021 2:00 pm</span>
      </ListGroupItem>
    </ListGroup>
  );
}

export default ProgressDemo;
