import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AppLayout } from "./AppLayout";
import { appRoutes } from "./routes";
import { HomePage } from "../features/home";
import { HistoryPage } from "../features/history";
import { MinistriesPage } from "../features/ministries";
import { PlantingPage } from "../features/planting";
import { PrayerPage } from "../features/prayer";
import { PlanVisitPage } from "../features/visit";
import { CellGroupsPage } from "../features/cellgroups";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path={appRoutes.home} element={<HomePage />} />
          <Route path={appRoutes.planVisit} element={<PlanVisitPage />} />
          <Route path={appRoutes.history} element={<HistoryPage />} />
          <Route path={appRoutes.ministries} element={<MinistriesPage />} />
          <Route path={appRoutes.cellGroups} element={<CellGroupsPage />} />
          <Route path={appRoutes.churchPlanting} element={<PlantingPage />} />
          <Route path={appRoutes.prayerRequest} element={<PrayerPage />} />
          <Route
            path="/home"
            element={<Navigate to={appRoutes.home} replace />}
          />
          <Route path="*" element={<Navigate to={appRoutes.home} replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
