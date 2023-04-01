import React from "react";
import { Route, Routes } from "react-router";
import ProtectedRoute from "./ProtectedRoute";
import { useSelector } from "react-redux";
import PrivateLayout from "../components/protectedComponents/PrivateLayout";

import PrivateHomeScreen from "../screens/privateScreens/PrivateHomeScreen";
import PrivateCasinoScreen from "../screens/privateScreens/PrivateCasinoScreen";
import PrivateCricketScreen from "../screens/privateScreens/PrivateCricketScreen";
import PrivateSoccerScreen from "../screens/privateScreens/PrivateSoccerScreen";
import PrivateGreyHoundRacingScreen from "../screens/privateScreens/PrivateGreyHoundRacingScreen";
import PrivateHorseRacingScreen from "../screens/privateScreens/PrivateHorseRacingScreen";
import PrivateKabaddiScreen from "../screens/privateScreens/PrivateKabaddiScreen";
import PrivatePoliticsScreen from "../screens/privateScreens/PrivatePoliticsScreen";
import PrivateTennisScreen from "../screens/privateScreens/PrivateTennisScreen";
import PrivateIntCasino from "../screens/privateScreens/PrivateIntCasino";
import AccountVerification from "./../components/protectedComponents/AccountVerification";
import ProfitLoss from "./../components/protectedComponents/ProfitLoss";
import BetHistory from "./../components/protectedComponents/BetHistory";
import ChangeButtonVlaue from "./../components/protectedComponents/ChangeButtonVlaue";
import PrivateChangePassword from "./../components/protectedComponents/PrivateChangePassword";
import ParentEventMatch from "../components/protectedComponents/gameList/ParentEventMatch";

export default function PrivateRoutes() {
  const { login } = useSelector((state) => state?.auth);
  const routesData = [
    {
      path: "/",
      component: <PrivateHomeScreen />,
    },
    {
      path: "/game-list/event/:eventId/:gameId",
      component: <ParentEventMatch />,
    },
    { path: "/game-list/cricket", component: <PrivateCricketScreen /> },
    { path: "/game-list/casino", component: <PrivateCasinoScreen /> },
    { path: "/game-list/soccer", component: <PrivateSoccerScreen /> },
    {
      path: "/game-list/grey-hound-racing",
      component: <PrivateGreyHoundRacingScreen />,
    },
    {
      path: "/account-statement",
      component: <AccountVerification />,
    },
    {
      path: "/profit-loss",
      component: <ProfitLoss />,
    },
    {
      path: "/bet-history",
      component: <BetHistory />,
    },
    {
      path: "/change-button-value",
      component: <ChangeButtonVlaue />,
    },
    {
      path: "/change-password",
      component: <PrivateChangePassword />,
    },
    {
      path: "/game-list/horse-racing",
      component: <PrivateHorseRacingScreen />,
    },
    { path: "/game-list/kabddi", component: <PrivateKabaddiScreen /> },
    { path: "/game-list/politics", component: <PrivatePoliticsScreen /> },
    { path: "/game-list/tennis", component: <PrivateTennisScreen /> },
    { path: "/game-list/int-casino", component: <PrivateIntCasino /> },
  ];

  return (
    <PrivateLayout>
      <Routes>
        <Route exact path="/" element={<PrivateHomeScreen />} />
        <Route element={<ProtectedRoute login={login} />}>
          {routesData.map(({ path, component }, i) => (
            <Route key={i} path={path} element={component} />
          ))}
        </Route>
      </Routes>
    </PrivateLayout>
  );
}
