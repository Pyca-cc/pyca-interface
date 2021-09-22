import { Switch, Route } from "react-router";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Hammer from "react-hammerjs";

import Header from "../Header";
import Sidebar from "../Sidebar";

import s from "./Layout.module.scss";

import Home from "../../views/home";

import { useUserConfig } from "../../contexts/user";

function Layout(props: any) {
  const {
    sidebarVisibility,
    sidebarPosition,
    dashboardTheme,
    sidebarOpened,
    setSidebarOpened,
  } = useUserConfig();

  const handleSwipe = (e: any) => {
    if ("ontouchstart" in window) {
      if (e.direction === 4) {
        setSidebarOpened(true);
        return;
      }
      if (e.direction === 2 && sidebarOpened) {
        setSidebarOpened(false);
        return;
      }
    }
  };

  return (
    <div
      className={[
        s.root,
        "sidebar-" + sidebarPosition,
        "sidebar-" + sidebarVisibility,
        `dashboard-${dashboardTheme}`,
      ].join(" ")}
    >
      <div className={s.wrap}>
        <Header />
        <Sidebar />
        <Hammer onSwipe={handleSwipe}>
          <main className={s.content}>
            <TransitionGroup>
              <CSSTransition
                key={props.location.key}
                classNames="fade"
                timeout={200}
              >
                <Switch>
                  <Route path="/home" exact component={Home} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
            {/*<footer className={s.contentFooter}>
            Price Yield Cumulative Asset - made by{" "}
            <a href="https://pyca.cc">Pyca</a>
          </footer>*/}
          </main>
        </Hammer>
      </div>
    </div>
  );
}

export default Layout;
