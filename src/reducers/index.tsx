import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import navigation from "./navigation";

const Reducers = (history :any) =>
  combineReducers({
    router: connectRouter(history),
    navigation,
  });

export default Reducers;
