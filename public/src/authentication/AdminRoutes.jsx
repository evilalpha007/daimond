import React from "react";
import { Route, Routes, Redirect, useNavigate } from "react-router";
import ProtectedRoute from "./ProtectedRoute";
import { useSelector } from "react-redux";

import AdminLoginScreen from "../screens/adminScreens/AdminLoginScreen";
import AdminChangePasswordScreen from "../screens/adminScreens/AdminChangePasswordScreen";
import AdminListOfClientsScreen from "../screens/adminScreens/AdminListOfClientsScreen";
import AdminMarketAnalysisScreen from "../screens/adminScreens/AdminMarketAnalysisScreen";
import AdminMatchDetailsScreen from "../screens/adminScreens/AdminMatchDetailsScreen";
import AdminSecurityAuthScreen from "../screens/adminScreens/AdminSecurityAuthScreen";

import AdminAccountStatementScreen from "../screens/adminScreens/reports/AdminAccountStatementScreen";
import AdminCasinoReportScreen from "../screens/adminScreens/reports/AdminCasinoReportScreen";
import AdminCasinoResultReportScreen from "../screens/adminScreens/reports/AdminCasinoResultReportScreen";
import AdminCurrentBetsScreen from "../screens/adminScreens/reports/AdminCurrentBetsScreen";
import AdminExposureDetailsScreen from "../screens/adminScreens/reports/AdminExposureDetailsScreen";
import AdminGameReportScreen from "../screens/adminScreens/reports/AdminGameReportScreen";
import AdminGeneralReportScreen from "../screens/adminScreens/reports/AdminGeneralReportScreen";
import AdminProfitLossScreen from "../screens/adminScreens/reports/AdminProfitLossScreen";

import Admin3CardJudgementScreen from "../screens/adminScreens/liveGames/Admin3CardJudgementScreen";
import AdminAndarBaharScreen from "../screens/adminScreens/liveGames/AdminAndarBaharScreen";
import AdminBaccaratScreen from "../screens/adminScreens/liveGames/AdminBaccaratScreen";
import AdminBinaryScreen from "../screens/adminScreens/liveGames/AdminBinaryScreen";
import AdminBollywoodScreen from "../screens/adminScreens/liveGames/AdminBollywoodScreen";
import AdminCard32Screen from "../screens/adminScreens/liveGames/AdminCard32Screen";
import AdminCasinoQueenScreen from "../screens/adminScreens/liveGames/AdminCasinoQueenScreen";
import AdminCasinoWarScreen from "../screens/adminScreens/liveGames/AdminCasinoWarScreen";
import AdminCricketCasinoScreen from "../screens/adminScreens/liveGames/AdminCricketCasinoScreen";
import AdminDartScreen from "../screens/adminScreens/liveGames/AdminDartScreen";
import AdminDragonTigerScreen from "../screens/adminScreens/liveGames/AdminDragonTigerScreen";
import AdminLivePokerScreen from "../screens/adminScreens/liveGames/AdminLivePokerScreen";
import AdminLotteryScreen from "../screens/adminScreens/liveGames/AdminLotteryScreen";
import AdminLucky7Screen from "../screens/adminScreens/liveGames/AdminLucky7Screen";
import AdminRace20Screen from "../screens/adminScreens/liveGames/AdminRace20Screen";
import AdminSlotGameScreen from "../screens/adminScreens/liveGames/AdminSlotGameScreen";
import AdminSportScreen from "../screens/adminScreens/liveGames/AdminSportScreen";
import AdminTeenPattiScreen from "../screens/adminScreens/liveGames/AdminTeenPattiScreen";
import AdminVirtualSportsScreen from "../screens/adminScreens/liveGames/AdminVirtualSportsScreen";
import AdminWorliScreen from "../screens/adminScreens/liveGames/AdminWorliScreen";
import AdminHomeScreen from "../screens/adminScreens/AdminHomeScreen";
import AdminLayout from "../components/adminComponents/AdminLayout";

export default function AdminRoutes() {
  const { adminLogin } = useSelector((state) => state?.auth);
  // const navigate = useNavigate();

  const routesData = [
    { path: "/admin/security-auth", component: <AdminSecurityAuthScreen /> },
    {
      path: "/admin/change-password",
      component: <AdminChangePasswordScreen />,
    },
    { path: "/admin/list-of-clients", component: <AdminListOfClientsScreen /> },
    {
      path: "/admin/market-analysis",
      component: <AdminMarketAnalysisScreen />,
    },
    { path: "/admin/match-details", component: <AdminMatchDetailsScreen /> },

    { path: "/admin", component: <AdminHomeScreen /> },
    {
      path: "/admin/reports/account-statement",
      component: <AdminAccountStatementScreen />,
    },
    {
      path: "/admin/reports/exposure-details",
      component: <AdminExposureDetailsScreen />,
    },
    {
      path: "/admin/reports/current-bets",
      component: <AdminCurrentBetsScreen />,
    },
    {
      path: "/admin/reports/general-report",
      component: <AdminGeneralReportScreen />,
    },
    {
      path: "/admin/reports/game-report",
      component: <AdminGameReportScreen />,
    },
    {
      path: "/admin/reports/casino-report",
      component: <AdminCasinoReportScreen />,
    },
    {
      path: "/admin/reports/profit-loss",
      component: <AdminProfitLossScreen />,
    },
    {
      path: "/admin/reports/casino-result-report",
      component: <AdminCasinoResultReportScreen />,
    },

    {
      path: "/admin/live-game/3-cards-judgement",
      component: <Admin3CardJudgementScreen />,
    },
    {
      path: "/admin/live-game/andar-bahar",
      component: <AdminAndarBaharScreen />,
    },
    { path: "/admin/live-game/baccarat", component: <AdminBaccaratScreen /> },
    { path: "/admin/live-game/binary", component: <AdminBinaryScreen /> },
    {
      path: "/admin/live-game/bollywood",
      component: <AdminBollywoodScreen />,
    },
    { path: "/admin/live-game/card-32", component: <AdminCard32Screen /> },
    {
      path: "/admin/live-game/casino-queen",
      component: <AdminCasinoQueenScreen />,
    },
    {
      path: "/admin/live-game/casino-war",
      component: <AdminCasinoWarScreen />,
    },
    {
      path: "/admin/live-game/cricket-casino",
      component: <AdminCricketCasinoScreen />,
    },
    { path: "/admin/live-game/dart", component: <AdminDartScreen /> },
    {
      path: "/admin/live-game/dragon-tiger",
      component: <AdminDragonTigerScreen />,
    },
    {
      path: "/admin/live-game/live-poker",
      component: <AdminLivePokerScreen />,
    },
    { path: "/admin/live-game/lottery", component: <AdminLotteryScreen /> },
    { path: "/admin/live-game/lucky-7", component: <AdminLucky7Screen /> },
    { path: "/admin/live-game/race-20", component: <AdminRace20Screen /> },
    {
      path: "/admin/live-game/slot-game",
      component: <AdminSlotGameScreen />,
    },
    { path: "/admin/live-game/sport", component: <AdminSportScreen /> },
    {
      path: "/admin/live-game/teen-patti",
      component: <AdminTeenPattiScreen />,
    },
    {
      path: "/admin/live-game/virtual-sports",
      component: <AdminVirtualSportsScreen />,
    },
    { path: "/admin/live-game/worli", component: <AdminWorliScreen /> },
  ];

  return (
    <>
      <AdminLayout>
        <Routes>
          <Route element={<ProtectedRoute login={adminLogin} />}>
            {routesData.map((routes, index) => {
              return (
                <Route
                  key={index}
                  path={routes.path}
                  element={routes.component}
                />
              );
            })}
          </Route>
          <Route path="/admin" element={<AdminLoginScreen />} />
        </Routes>
      </AdminLayout>
    </>
  );
}
