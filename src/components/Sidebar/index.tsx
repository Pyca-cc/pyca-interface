import React from "react";
import { Progress, Alert } from "reactstrap";

import DashboardIcon from "../Icons/SidebarIcons/DashboardIcon";
/*
import UserIcon from "../Icons/SidebarIcons/UserIcon";
import EcommerceIcon from "../Icons/SidebarIcons/EcommerceIcon";
import LBPackageIcon from "../Icons/SidebarIcons/LBPackageIcon";
import EmailIcon from "../Icons/SidebarIcons/EmailIcon";
import DocumentationIcon from "../Icons/SidebarIcons/DocumentationIcon";
import CoreIcon from "../Icons/SidebarIcons/CoreIcon";
import UIElementsIcon from "../Icons/SidebarIcons/UIElementsIcon";
import GridIcon from "../Icons/SidebarIcons/GridIcon";
import FormsIcon from "../Icons/SidebarIcons/FormsIcon";
import ChartsIcon from "../Icons/SidebarIcons/ChartsIcon";
import TablesIcon from "../Icons/SidebarIcons/TablesIcon";
import MapsIcon from "../Icons/SidebarIcons/MapsIcon";
import ExtraIcon from "../Icons/SidebarIcons/ExtraIcon";
import MenuIcon from "../Icons/SidebarIcons/MenuIcon";
*/
import LinksGroup from "./LinksGroup/LinksGroup";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { dismissAlert } from "../../actions/alerts";
import { changeActiveSidebarItem } from "../../actions/navigation";

import s from "./Sidebar.module.scss";
import cx from "classnames";

function Sidebar(props: any) {
  return (
    <nav
      className={cx(s.root)}
      /*ref={(nav) => {
        document.element = nav;
      }}*/
    >
      <header className={s.logo}>
        <a href="https://pyca.cc">
          PY<span className="fw-bold">CA</span>
        </a>
      </header>
      <ul className={s.nav}>
        <h5 className={[s.navTitle, s.groupTitle].join(" ")}>APP</h5>
        <LinksGroup
          onActiveSidebarItemChange={(activeItem: any) =>
            props.dispatch(changeActiveSidebarItem(activeItem))
          }
          activeItem={props.activeItem}
          header="Home"
          isHeader
          iconName={<DashboardIcon className={s.menuIcon} />}
          link="/"
          exact={true}
          label="new"
          labelColor="success"
          index="home"
        />
      </ul>
      <h5 className={[s.navTitle, s.groupTitle].join(" ")}>
        SOCIAL
        {/* eslint-disable-next-line */}
      </h5>
      {/* eslint-disable */}
      <ul className={s.sidebarLabels}>
        <li>
          <a href="https://twitter.com/pyca_cc" target="_blank">
            <i className="fa fa-twitter" />
            <span className={s.labelName}>Twitter</span>
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <i className="fa fa-medium" />
            <span className={s.labelName}>Medium</span>
          </a>
        </li>
        <li>
          <a href="https://t.me/pycacc" target="_blank">
            <i className="fa fa-telegram" />
            <span className={s.labelName}>Telegram</span>
          </a>
        </li>
      </ul>
      {/* eslint-enable */}
      <h5 className={[s.navTitle, s.groupTitle].join(" ")}>PROJECTS</h5>
      <div className={s.sidebarAlerts}>
        {props.alertsList.map((
          alert: any // eslint-disable-line
        ) => (
          <Alert
            key={alert.id}
            className={s.sidebarAlert}
            color="transparent"
            isOpen={true} // eslint-disable-line
            toggle={() => {
              props.dispatch(dismissAlert(alert.id));
            }}
          >
            <span>{alert.title}</span>
            <br />
            <Progress
              className={`bg-subtle-blue progress-xs mt-1`}
              color={alert.color}
              value={alert.value}
            />
            <span className={s.alertFooter}>{alert.footer}</span>
          </Alert>
        ))}
      </div>
    </nav>
  );
}

function mapStateToProps(store: any) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
    sidebarStatic: store.navigation.sidebarStatic,
    alertsList: store.alerts.alertsList,
    activeItem: store.navigation.activeItem,
  };
}

export default withRouter(connect(mapStateToProps)(Sidebar));
