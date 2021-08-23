export const DISMISS_ALERT = "DISMISS_ALERT";

export function dismissAlert(id: any) {
  return {
    type: DISMISS_ALERT,
    id,
  };
}
