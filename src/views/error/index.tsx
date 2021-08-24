import React from "react";
import { Container, Button } from "reactstrap";
import { Link } from "react-router-dom";

import s from "./ErrorPage.module.scss";

function ErrorPage() {
  return (
    <div className={s.errorPage}>
      <Container>
        <div className={`${s.errorContainer} mx-auto`}>
          <h1 className={s.errorCode}>404</h1>
          <p className={s.errorInfo}>
            Opps, it seems that this page does not exist here.
          </p>
          <p className={[s.errorHelp, "mb-3"].join(" ")}>
            Please return to the home page
          </p>
          <Link to="home">
            <Button className={s.errorBtn} type="submit" color="inverse">
              Home <i className="fa fa-home text-secondary ml-xs" />
            </Button>
          </Link>
        </div>
        <footer className={s.pageFooter}>
          {new Date().getFullYear()} &copy;{" "}
          <a href="https://pyca.cc" rel="noopener noreferrer" target="_blank">
            PYCA
          </a>
          {" "}- Our team is working hard to ensure that this page is not visited{" "}
        </footer>
      </Container>
    </div>
  );
}

export default ErrorPage;
