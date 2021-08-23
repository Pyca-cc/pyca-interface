import { DISMISS_ALERT } from "../actions/alerts";

const defaultState = {
  alertsList: [
    {
      id: 0,
      title: "Private sale report",
      value: 12,
      color: "primary",
      footer: "Total tokens sold... 12%",
    },
    {
      id: 1,
      title: "PYCA Supply",
      value: 25,
      color: "danger",
      footer: "Total circulation supply",
    },
  ],
};

export default function alertsReducer(state = defaultState, action: any) {
  let index=0;
  switch (action.type) {
    case DISMISS_ALERT:
      state.alertsList.forEach((alert, alertIndex) => {
        if (alert.id === action.id) {
          index = alertIndex;
        }
      });
      return Object.assign({}, state, {
        alertsList: [
          ...state.alertsList.slice(0, index),
          ...state.alertsList.slice(index + 1),
        ],
      });
    default:
      return state;
  }
}
