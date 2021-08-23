import React, { useState } from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Input,
  UncontrolledAlert,
  Dropdown,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  ButtonGroup,
  Button,
  Form,
  FormGroup,
} from "reactstrap";

import PowerIcon from "../Icons/HeaderIcons/PowerIcon";
import BellIcon from "../Icons/HeaderIcons/BellIcon";
import SettingsIcon from "../Icons/HeaderIcons/SettingsIcon";
import MessageIcon from "../Icons/HeaderIcons/MessageIcon";
import BurgerIcon from "../Icons/HeaderIcons/BurgerIcon";
import SearchIcon from "../Icons/HeaderIcons/SearchIcon";
import ArrowIcon from "../Icons/HeaderIcons/ArrowIcon";
import Notifications from "../Notifications";

import {
  openSidebar,
  closeSidebar,
  changeSidebarPosition,
  changeSidebarVisibility,
} from "../../actions/navigation";

import { connect } from "react-redux";
import { withRouter } from "react-router";

import s from "./Header.module.scss";

function Header(props: any) {
  const [messagesOpen, setMessageOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  function doLogout() {
    console.log("logout");
  }

  function toggleSidebar() {
    props.isSidebarOpened
      ? props.dispatch(closeSidebar())
      : props.dispatch(openSidebar());
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
        <Collapse
          className={`${s.searchCollapse} ml-lg-0 mr-md-3`}
          isOpen={searchOpen}
        >
          <InputGroup
            className={`${s.navbarForm} ${
              searchFocused ? s.navbarFormFocused : ""
            }`}
          >
            <InputGroupAddon addonType="prepend" className={s.inputAddon}>
              <InputGroupText>
                <i className="fa fa-search" />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              id="search-input-2"
              placeholder="Search..."
              className="input-transparent"
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
          </InputGroup>
        </Collapse>
        <Form className="d-md-down-none mr-3 ml-3" inline>
          <FormGroup>
            <InputGroup className={`input-group-no-border ${s.searchForm}`}>
              <InputGroupAddon addonType="prepend">
                <InputGroupText className={s.inputGroupText}>
                  <SearchIcon className={s.headerIcon} />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                id="search-input"
                className="input-transparent"
                placeholder="Search Dashboard"
              />
            </InputGroup>
          </FormGroup>
        </Form>

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
          <NavItem className="d-lg-none">
            <NavLink
              onClick={() => setSearchOpen(!searchOpen)}
              className={s.navItem}
              href="#"
            >
              <SearchIcon addId="header-search" className={s.headerIcon} />
            </NavLink>
          </NavItem>
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
                {/* eslint-disable-next-line */}
                <a href="#" className="text-white">
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
                  onClick={() => props.dispatch(changeSidebarPosition("left"))}
                  className={props.sidebarPosition === "left" ? "active" : ""}
                >
                  Left
                </Button>
                <Button
                  color="primary"
                  onClick={() => props.dispatch(changeSidebarPosition("right"))}
                  className={props.sidebarPosition === "right" ? "active" : ""}
                >
                  Right
                </Button>
              </ButtonGroup>
              <h6 className="mt-2">Sidebar</h6>
              <ButtonGroup size="sm">
                <Button
                  color="primary"
                  onClick={() =>
                    props.dispatch(changeSidebarVisibility("show"))
                  }
                  className={props.sidebarVisibility === "show" ? "active" : ""}
                >
                  Show
                </Button>
                <Button
                  color="primary"
                  onClick={() =>
                    props.dispatch(changeSidebarVisibility("hide"))
                  }
                  className={props.sidebarVisibility === "hide" ? "active" : ""}
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
                {/* eslint-disable-next-line */}
                <a href="#" className="text-white">
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

function mapStateToProps(store: any) {
  return {
    isSidebarOpened: store.navigation.sidebarOpened,
    sidebarVisibility: store.navigation.sidebarVisibility,
    sidebarPosition: store.navigation.sidebarPosition,
  };
}

export default withRouter(connect(mapStateToProps)(Header));
