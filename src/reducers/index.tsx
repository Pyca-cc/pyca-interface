import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import alerts from "./alerts";
import navigation from "./navigation";

const Reducers = (history :any) =>
  combineReducers({
    router: connectRouter(history),
    alerts,
    navigation,
  });

export default Reducers;
