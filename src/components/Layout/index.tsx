import React from "react";
import { Switch, Route, withRouter } from "react-router";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { connect } from "react-redux";
//import Hammer from "hammerjs";

import Header from "../Header";
import Sidebar from "../Sidebar";

import s from "./Layout.module.scss";

//import { openSidebar, closeSidebar } from "../../actions/navigation";
import Home from "../../views/home";

function Layout(props: any) {
  /*
  const [chatOpen, setChatOpen] = useState();

  const handleSwipe = (e: any) => {
    if ("ontouchstart" in window) {
      if (e.direction === 4 && !chatOpen) {
      //  props.dispatch(openSidebar());


        return;
      }
      if (e.direction === 2 && props.sidebarOpened) {
      //  props.dispatch(closeSidebar());
        return;
      }
      setChatOpen(e.direction === 2);
    }
  };

*/

  return (
    <div
      className={[
        s.root,
        "sidebar-" + props.sidebarPosition,
        "sidebar-" + props.sidebarVisibility,
        `dashboard-${props.dashboardTheme}`,
      ].join(" ")}
    >
      <div className={s.wrap}>
        <Header />
        <Sidebar />
        {/*<Hammer onSwipe={handleSwipe}>*/}
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
          <footer className={s.contentFooter}>
            Price Yield Cumulative Asset - made by{" "}
            <a href="https://pyca.cc">Pyca</a>
          </footer>
        </main>
        {/*</Hammer>*/}
      </div>
    </div>
  );
}

function mapStateToProps(store: any) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
    sidebarPosition: store.navigation.sidebarPosition,
    sidebarVisibility: store.navigation.sidebarVisibility,
    dashboardTheme: store.navigation.dashboardTheme,
  };
}

export default withRouter(connect(mapStateToProps)(Layout));
