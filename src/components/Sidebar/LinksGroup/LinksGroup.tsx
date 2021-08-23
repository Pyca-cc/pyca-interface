import React, { useState } from "react";
import { Collapse, Badge } from "reactstrap";
import { Route } from "react-router";
import { NavLink, withRouter } from "react-router-dom";

import classnames from "classnames";

import s from "./LinksGroup.module.scss";

function LinksGroup(props: any) {
  const [headerLinkWasClicked, setHeaderLinkWasClicked] = useState(true);

  function togglePanelCollapse(link: any, e: any) {
    props.onActiveSidebarItemChange(link);
    setHeaderLinkWasClicked(
      !headerLinkWasClicked ||
        (props.activeItem && !props.activeItem.includes(props.index))
    );
    e.preventDefault();
  }

  const isOpen =
    props.activeItem &&
    props.activeItem.includes(props.index) &&
    headerLinkWasClicked;

  const { exact } = props.exact;

  if (!props.childrenLinks) {
    if (props.isHeader) {
      return (
        <li className={[s.headerLink, props.className].join(" ")}>
          <NavLink
            to={props.link}
            activeClassName={s.headerLinkActive}
            exact={exact}
            target={props.target}
          >
            <span className={s.icon}>{props.iconName}</span>
            {props.header}{" "}
            {props.label && (
              <sup
                className={`${s.headerLabel} text-${
                  props.labelColor || "warning"
                }`}
              >
                {props.label}
              </sup>
            )}
            {props.badge && (
              <Badge className={s.badge} color="danger" pill>
                9
              </Badge>
            )}
          </NavLink>
        </li>
      );
    }
    return (
      <li>
        <NavLink
          to={props.link}
          activeClassName={s.headerLinkActive}
          style={{ paddingLeft: `${40 + 10 * (props.deep - 1)}px` }}
          onClick={(e) => {
            // able to go to link is not available(for Demo)
            if (props.link.includes("menu")) {
              e.preventDefault();
            }
          }}
          exact={exact}
        >
          {props.header}{" "}
          {props.label && (
            <sup
              className={`${s.headerLabel} text-${
                props.labelColor || "warning"
              }`}
            >
              {props.label}
            </sup>
          )}
        </NavLink>
      </li>
    );
  }
  /* eslint-disable */
  return (
    <Route
      path={props.link}
      children={(params) => {
        const { match } = params;
        return (
          <li
            className={classnames(
              { [s.headerLink]: props.isHeader },
              props.className
            )}
          >
            <a
              className={classnames(
                s.accordionToggle,
                { [s.headerLinkActive]: match },
                { [s.collapsed]: isOpen },
                "d-flex"
              )}
              style={{
                paddingLeft: `${
                  props.deep == 0 ? 10 : 35 + 10 * (props.deep - 1)
                }px`,
              }}
              onClick={(e) => togglePanelCollapse(props.link, e)}
              href="#"
            >
              {props.isHeader ? (
                <span className={s.icon}>{props.iconName}</span>
              ) : null}
              {props.header}{" "}
              {props.label && (
                <sup
                  className={`${s.headerLabel} text-${
                    props.labelColor || "warning"
                  } ml-1`}
                >
                  {props.label}
                </sup>
              )}
              <b className={["fa fa-angle-right", s.caret].join(" ")} />
            </a>
            {/* eslint-enable */}
            <Collapse className={s.panel} isOpen={isOpen}>
              <ul>
                {props.childrenLinks &&
                  props.childrenLinks.map((child: any, ind: any) => (
                    <div key={ind} onClick={child.action ? props.action : null}>
                      <LinksGroup
                        doLogout={props.doLogout}
                        onActiveSidebarItemChange={
                          props.onActiveSidebarItemChange
                        }
                        activeItem={props.activeItem}
                        header={child.header}
                        link={child.link}
                        index={child.index}
                        childrenLinks={child.childrenLinks}
                        deep={props.deep + 1}
                        // eslint-disable-line
                      />
                    </div>
                  ))}
              </ul>
            </Collapse>
          </li>
        );
      }}
    />
  );
}

export default withRouter(LinksGroup);
