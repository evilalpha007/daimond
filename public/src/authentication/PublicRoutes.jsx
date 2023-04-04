import React from "react";
import { Route, Routes } from "react-router";
import HomeScreen from "../screens/publicScreens/HomeScreen";
import BonusesScreen from "../screens/publicScreens/BonusesScreen";
import InPlayScreen from "../screens/publicScreens/InPlayScreen";
import SportsBookScreen from "../screens/publicScreens/SportsBookScreen";
import CasinoScreen from "../screens/publicScreens/casino/CasinoScreen";
import JackpotScreen from "../screens/publicScreens/casino/JackpotScreen";
import LiveCasinoScreen from "../screens/publicScreens/casino/LiveCasinoScreen";
import SlotsScreen from "../screens/publicScreens/casino/SlotsScreen";
import Poker from "./../screens/publicScreens/casino/Poker";
import Blackjack from "./../screens/publicScreens/casino/Blackjack";
import Roulete from "./../screens/publicScreens/casino/Roulete";
import ProtectedRoute from "./ProtectedRoute";
import { useSelector } from "react-redux";
import AdminLoginScreen from "../screens/adminScreens/AdminLoginScreen";
import DaimondLogin from "../components/publicComponents/DaimondLogin";

export default function PublicRoutes() {
  const { hidePublicRoutes } = useSelector((state) => state?.auth);
  console.log(hidePublicRoutes);
  return (
    <Routes>
      <Route element={<ProtectedRoute hidePublic={hidePublicRoutes} />}>
        <Route path="/" element={<DaimondLogin />} />
        {/*<Route path="/" element={<HomeScreen />} />
        <Route path="/bonuses" element={<BonusesScreen />} />
        <Route path="/InPlayScreen" element={<InPlayScreen />} />
        <Route path="/sports-book" element={<SportsBookScreen />} />
        <Route path="/casino" element={<CasinoScreen />} />
        <Route path="/jackpot" element={<JackpotScreen />} />
        <Route path="/poker" element={<Poker />} />
        <Route path="/blackjack" element={<Blackjack />} />
        <Route path="/roulete" element={<Roulete />} />
        <Route path="/casino/live-casino" element={<LiveCasinoScreen />} />
  <Route path="/slots" element={<SlotsScreen />} /> */}
      </Route>
    </Routes>
  );
}
