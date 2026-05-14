export const appRoutes = {
  home: "/",
  planVisit: "/plan-a-visit",
  history: "/history",
  ministries: "/ministries",
  cellGroups: "/cell-groups",
  churchPlanting: "/church-planting",
  prayerRequest: "/prayer-request",
} as const;

export type AppRoutePath = (typeof appRoutes)[keyof typeof appRoutes];

export interface NavigationItem {
  label: string;
  to: AppRoutePath;
  hash?: string;
}

export const primaryNavigationItems: NavigationItem[] = [
  { label: "Home", to: appRoutes.home },
  { label: "History", to: appRoutes.history },
  { label: "Ministries", to: appRoutes.ministries },
  { label: "Cell Groups", to: appRoutes.cellGroups },
  { label: "Church Planting", to: appRoutes.churchPlanting },
  { label: "Prayer Request", to: appRoutes.prayerRequest },
];
