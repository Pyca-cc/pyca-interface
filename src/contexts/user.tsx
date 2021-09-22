import React, { useContext, createContext } from "react";
import { useLocalStorage } from "./../utils/utils";

import { defaultConfig } from "./../utils/config";

export const SIDEBAR_POSITION = [
  {
    position: "left",
  },
  {
    position: "right",
  },
];

export const SIDEBAR_VISIBILITY = [
  {
    visibility: "show",
  },
  {
    visibility: "hide",
  },
];

export const DASHBOARD_THEME = [
  {
    theme: "default",
  },
];

interface UserConfig {
  sidebarPosition: string;
  setSidebarPosition: (val: string) => void;
  sidebarVisibility: string;
  setSidebarVisibility: (val: string) => void;
  dashboardTheme: string;
  setDashboardTheme: (val: string) => void;
  sidebarOpened: boolean;
  setSidebarOpened: (val: boolean) => void;
}

const UserContext = createContext<UserConfig>({
  sidebarPosition: defaultConfig().sidebarPosition,
  setSidebarPosition: () => {},
  sidebarVisibility: defaultConfig().sidebarVisibility,
  setSidebarVisibility: () => {},
  dashboardTheme: defaultConfig().dashboardTheme,
  setDashboardTheme: () => {},
  sidebarOpened: defaultConfig().sidebarOpened,
  setSidebarOpened: () => {},
});

export function UserProvider({ children = undefined as any }) {
  const [sidebarPosition, setSidebarPosition] = useLocalStorage(
    "sidebarPosition",
    defaultConfig().sidebarPosition
  );

  const [sidebarVisibility, setSidebarVisibility] = useLocalStorage(
    "sidebarVisibility",
    defaultConfig().sidebarVisibility
  );

  const [dashboardTheme, setDashboardTheme] = useLocalStorage(
    "dashboardTheme",
    defaultConfig().dashboardTheme
  );

  const [sidebarOpened, setSidebarOpened] = useLocalStorage(
    "sidebarOpened",
    defaultConfig().sidebarOpened.toString()
  );

  return (
    <UserContext.Provider
      value={{
        sidebarPosition,
        setSidebarPosition,
        sidebarVisibility,
        setSidebarVisibility,
        dashboardTheme,
        setDashboardTheme,
        sidebarOpened,
        setSidebarOpened,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUserConfig() {
  const context = useContext(UserContext);
  return {
    sidebarPosition: context.sidebarPosition,
    setSidebarPosition: context.setSidebarPosition,
    sidebarVisibility: context.sidebarVisibility,
    setSidebarVisibility: context.setSidebarVisibility,
    dashboardTheme: context.dashboardTheme,
    setDashboardTheme: context.setDashboardTheme,
    sidebarOpened: context.sidebarOpened,
    setSidebarOpened: context.setSidebarOpened,
  };
}
