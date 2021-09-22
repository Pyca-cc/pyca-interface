import React, { useState, useEffect } from "react";
import { Progress, Alert } from "reactstrap";

import DashboardIcon from "../Icons/SidebarIcons/DashboardIcon";

import LinksGroup from "./LinksGroup/LinksGroup";

import { Button } from "reactstrap";

import { useUserConfig } from "../../contexts/user";

import s from "./Sidebar.module.scss";
import cx from "classnames";
let element: any;

function Sidebar(props: any) {
  const [alertsList, setAlertsList] = useState<any[]>([]);
  const [isLoad, setIsLoad] = useState(false);
  const { sidebarOpened } = useUserConfig();

  useEffect(() => {
    getAlerts();
  }, []);

  function getAlerts() {
    setIsLoad(true);
    setAlertsList([]);
    setTimeout(() => {
      fetch("https://raw.githubusercontent.com/Pyca-cc/alerts/main/alerts.json")
        .then((response) => response.json())
        .then((data) => setAlertsList(data));
      setIsLoad(false);
    }, 1500);
  }

  function changeActiveSidebarItem(activeItem: any) {}

  useEffect(() => {
    if (element) {
      if (sidebarOpened) {
        element.style.height = `${element.scrollHeight}px`;
        element.classList.add(s.sidebarOpen);
      } else {
        element.classList.remove(s.sidebarOpen);
        setTimeout(() => {
          element.style.height = "";
        }, 0);
      }
    }
  }, [sidebarOpened]);

  return (
    <nav
      className={cx(s.root)}
      ref={(nav) => {
        element = nav;
      }}
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
            changeActiveSidebarItem(activeItem)
          }
          activeItem={props.activeItem}
          header="Home"
          isHeader
          iconName={<DashboardIcon className={s.menuIcon} />}
          link="/home"
          exact={true}
          label="new"
          labelColor="success"
          index="home"
        />
      </ul>
      <h5 className={[s.navTitle, s.groupTitle].join(" ")}>
        SOCIAL
      </h5>
      <ul className={s.sidebarLabels}>
        <li>
          <a href="https://twitter.com/pyca_cc" target="_blank" rel="noreferrer">
            <i className="fa fa-twitter" />
            <span className={s.labelName}>Twitter</span>
          </a>
        </li>
        <li>
          <a href="https://t.me/pycacc" target="_blank" rel="noreferrer">
            <i className="fa fa-medium" />
            <span className={s.labelName}>Medium</span>
          </a>
        </li>
        <li>
          <a href="https://t.me/pycacc" target="_blank" rel="noreferrer">
            <i className="fa fa-telegram" />
            <span className={s.labelName}>Telegram</span>
          </a>
        </li>
      </ul>
      <h5 className={[s.navTitle, s.groupTitle].join(" ")}>
        ALERTS
        <Button
          color="link"
          className={cx(
            { disabled: isLoad },
            s.btnNotificationsReload,
            "btn-xs"
          )}
          onClick={() => getAlerts()}
        >
          {isLoad ? (
            <span>
              <i className="la la-refresh la-spin" /> Loading...
            </span>
          ) : (
            <i className="la la-refresh" />
          )}
        </Button>
      </h5>

      <div className={s.sidebarAlerts}>
        {alertsList.map((
          alert: any
        ) => (
          <Alert
            key={alert.id}
            className={s.sidebarAlert}
            color="transparent"
            isOpen={true}
            /*toggle={() => {
              getAlerts();
            }}*/
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

export default Sidebar;
