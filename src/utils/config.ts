export const DEFAULT_SIDEBAR_POSITION = "left";

export const DEFAULT_SIDEBAR_VISIBILITY = "show"

export const DEFAULT_DASHBOARD_THEME = "default";

export const DEFAULT_SIDEBAR_OPENED = false;

export const defaultConfig = () => {
  return {
    sidebarPosition: DEFAULT_SIDEBAR_POSITION,
    sidebarVisibility: DEFAULT_SIDEBAR_VISIBILITY,
    dashboardTheme: DEFAULT_DASHBOARD_THEME,
    sidebarOpened: DEFAULT_SIDEBAR_OPENED,
  };
};
