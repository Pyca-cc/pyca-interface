import React, { useState } from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  UncontrolledAlert,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  ButtonGroup,
  Button,
} from "reactstrap";

import PowerIcon from "../Icons/HeaderIcons/PowerIcon";
import BellIcon from "../Icons/HeaderIcons/BellIcon";
import SettingsIcon from "../Icons/HeaderIcons/SettingsIcon";
import MessageIcon from "../Icons/HeaderIcons/MessageIcon";
import BurgerIcon from "../Icons/HeaderIcons/BurgerIcon";
import ArrowIcon from "../Icons/HeaderIcons/ArrowIcon";
import Notifications from "../Notifications";

import s from "./Header.module.scss";

import { useUserConfig } from "../../contexts/user";

function Header(props: any) {
  const [messagesOpen, setMessageOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const {
    sidebarPosition,
    setSidebarPosition,
    sidebarVisibility,
    setSidebarVisibility,
    sidebarOpened,
    setSidebarOpened,
  } = useUserConfig();

  function doLogout() {
    console.log("logout");
  }

  function toggleSidebar() {
    sidebarOpened ? closeSidebar() : openSidebar();
  }

  function closeSidebar() {
    setSidebarOpened(false);
  }

  function openSidebar() {
    setSidebarOpened(true);
  }

  function changeSidebarPosition(position: string) {
    setSidebarPosition(position);
  }

  function changeSidebarVisibility(visibility: string) {
    setSidebarVisibility(visibility);
  }

  const user = {
    nft: false,
    name: "User",
  };

  const avatar =
    "https://cdn.pixabay.com/photo/2018/04/18/18/56/user-3331257_960_720.png";
  const premiumAvatar =
    "https://cdn.pixabay.com/photo/2018/04/18/18/56/user-3331258_960_720.png";

  const tx1 =
    "https://assets.trustwalletapp.com/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png";

  return (
    <Navbar className={`d-print-none`}>
      <div className={s.burger}>
        <NavLink
          onClick={toggleSidebar}
          className={`d-md-none ${s.navItem} text-white`}
          href="#"
        >
          <BurgerIcon className={s.headerIcon} />
        </NavLink>
      </div>
      <div className={`d-print-none ${s.root}`}>
        <UncontrolledAlert
          className={`${s.alert} mr-3 d-lg-down-none animate__animated animate__bounceIn animate__delay-1s`}
        >
          Check out settings
          <button
            className="btn-link"
            onClick={() => setSettingsOpen(!settingsOpen)}
          >
            <SettingsIcon className={s.settingsIcon} />
          </button>{" "}
          on the right!
        </UncontrolledAlert>
        <Nav className="ml-md-0">
          <Dropdown
            nav
            isOpen={notificationsOpen}
            toggle={() => setNotificationsOpen(!notificationsOpen)}
            id="basic-nav-dropdown"
            className={`${s.notificationsMenu}`}
          >
            <DropdownToggle nav caret style={{ color: "#C1C3CF", padding: 0 }}>
              <span className={`${s.avatar} rounded-circle float-left`}>
                {user.nft ? (
                  <img
                    src={premiumAvatar}
                    onError={(e: any) => (e.target.src = premiumAvatar)}
                    alt="..."
                    title={user.name}
                  />
                ) : (
                  <img
                    src={avatar}
                    onError={(e: any) => (e.target.src = avatar)}
                    alt="..."
                    title={user.name}
                  />
                )}
              </span>
              <span className={`small d-sm-down-none ${s.adminEmail}`}>
                {user.name}
              </span>
              <Badge className={`d-sm-down-none ${s.badge}`} color="danger">
                0
              </Badge>
            </DropdownToggle>
            <DropdownMenu
              right
              className={`${s.notificationsWrapper} py-0 animate__animated animate__faster animate__fadeInUp`}
            >
              <Notifications />
            </DropdownMenu>
          </Dropdown>

          <Dropdown
            nav
            isOpen={messagesOpen}
            toggle={() => setMessageOpen(!messagesOpen)}
          >
            <DropdownToggle
              nav
              className={`d-sm-down-none ${s.navItem} text-white`}
            >
              <MessageIcon className={s.headerIcon} />
            </DropdownToggle>
            <DropdownMenu right className={`${s.dropdownMenu} ${s.messages}`}>
              <DropdownItem>
                <img className={s.image} src={tx1} alt="" />
                <div className={s.details}>
                  <div>Receive DAI</div>
                  <div className={s.text}>TEST tx? ...</div>
                </div>
              </DropdownItem>
              <DropdownItem>
                <a href="/home" className="text-white">
                  See all transactions{" "}
                  <ArrowIcon
                    className={s.headerIcon}
                    maskName="messagesArrow"
                  />
                </a>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavItem className={`${s.divider} d-none d-sm-block`} />
          <Dropdown
            className="d-none d-sm-block"
            nav
            isOpen={settingsOpen}
            toggle={() => setSettingsOpen(!settingsOpen)}
          >
            <DropdownToggle nav className={`${s.navItem} text-white`}>
              <SettingsIcon addId="header-settings" className={s.headerIcon} />
            </DropdownToggle>
            <DropdownMenu className={`${s.dropdownMenu} ${s.settings}`}>
              <h6>Sidebar on the</h6>
              <ButtonGroup size="sm">
                <Button
                  color="primary"
                  onClick={() => changeSidebarPosition("left")}
                  className={sidebarPosition === "left" ? "active" : ""}
                >
                  Left
                </Button>
                <Button
                  color="primary"
                  onClick={() => changeSidebarPosition("right")}
                  className={sidebarPosition === "right" ? "active" : ""}
                >
                  Right
                </Button>
              </ButtonGroup>
              <h6 className="mt-2">Sidebar</h6>
              <ButtonGroup size="sm">
                <Button
                  color="primary"
                  onClick={() => changeSidebarVisibility("show")}
                  className={sidebarVisibility === "show" ? "active" : ""}
                >
                  Show
                </Button>
                <Button
                  color="primary"
                  onClick={() => changeSidebarVisibility("hide")}
                  className={sidebarVisibility === "hide" ? "active" : ""}
                >
                  Hide
                </Button>
              </ButtonGroup>
            </DropdownMenu>
          </Dropdown>
          <Dropdown
            className="d-none d-sm-block"
            nav
            isOpen={supportOpen}
            toggle={() => setSupportOpen(!supportOpen)}
          >
            <DropdownToggle nav className={`${s.navItem} text-white`}>
              <BellIcon className={s.headerIcon} />
              <span className={s.count}></span>
            </DropdownToggle>
            <DropdownMenu right className={`${s.dropdownMenu} ${s.support}`}>
              <DropdownItem>
                <Badge color="success">
                  <i className="fa fa-info-circle" />
                </Badge>
                <div className={s.details}>
                  This is just a simple notification
                </div>
              </DropdownItem>
              <DropdownItem>
                <a href="/home" className="text-white">
                  See all tickets{" "}
                  <ArrowIcon className={s.headerIcon} maskName="bellArrow" />
                </a>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavItem>
            <NavLink
              onClick={doLogout}
              className={`${s.navItem} text-white`}
              href="#"
            >
              <PowerIcon className={s.headerIcon} />
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    </Navbar>
  );
}

export default Header;
