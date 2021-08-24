import React from "react";
import { Switch, Route, Redirect } from "react-router";
import { HashRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ConnectedRouter } from "connected-react-router";

import { getHistory } from "./index";

import "./styles/theme.scss";

import LayoutComponent from "./components/Layout";

import ErrorPage from './views/error';

const CloseButton = ({ closeToast }: any) => (
  <i onClick={closeToast} className="la la-close notifications-close" />
);

function Routes(props: any) {
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
            <Route path="/error" exact component={ErrorPage}/>
            <Route path="/" render={(props) => React.createElement(LayoutComponent, props)}/>
            <Redirect from="*" to="/"/>
          </Switch>
        </HashRouter>
      </ConnectedRouter>
    </>
  );
}

export default Routes;
