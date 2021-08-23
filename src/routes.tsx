import React from "react";
import { Switch, Route, Redirect } from "react-router";
import { HashRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ConnectedRouter } from "connected-react-router";

import { getHistory } from "./index";

import "./styles/theme.scss";

/* eslint-disable */
//import ErrorPage from '../pages/error';
/* eslint-enable */

import LayoutComponent from "./components/Layout";

const CloseButton = ({ closeToast }: any) => (
  <i onClick={closeToast} className="la la-close notifications-close" />
);

function Routes() {
  return (
    <>
      <ToastContainer
        autoClose={5000}
        hideProgressBar
        closeButton={<CloseButton />}
      />
      <ConnectedRouter history={getHistory()}>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={() => <LayoutComponent />} />
            {/*<Route path="/error" exact component={ErrorPage}/>*/}
            <Redirect from="*" to="/" />
          </Switch>
        </HashRouter>
      </ConnectedRouter>
    </>
  );
}

export default Routes;
